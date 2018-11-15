package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.StarWarsDTO;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 *
 * @author adams
 */
public class StarWarsFuture {

    private List<Future<String>> starWarsFutures = new ArrayList();
    private List<StarWarsDTO> personList = new ArrayList();
    private final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    public String StarWarsFetcher(int amount) throws InterruptedException, ExecutionException {
        try {

            ExecutorService executor = Executors.newFixedThreadPool(5);
            for (int i = 1; i < amount + 1; i++) {
//            Index 17 in the swapi.io API returns a 404 so we skip it
            if (i == 17) {
                i++;
                amount++;
            }
                StarWarsCallable callable = new StarWarsCallable(i);
                Future<String> future = executor.submit(callable);
                if (Objects.nonNull(future)) {
                    starWarsFutures.add(future);
                }
            }

            for (Future<String> future : starWarsFutures) {
                personList.add(GSON.fromJson(future.get(), StarWarsDTO.class));
            }
            return GSON.toJson(personList);
        } catch (InterruptedException e) {
            throw new InterruptedException(e.getMessage());
        }
    }
}
