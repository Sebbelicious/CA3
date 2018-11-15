package rest;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;
import java.util.concurrent.Callable;

/**
 *
 * @author adams
 */
public class StarWarsCallable implements Callable<String> {

    private final int id;

    public StarWarsCallable(int id) {
        this.id = id;
    }

    @Override
    public String call() throws InterruptedException  {
        try {
            System.out.println("starting " + Thread.currentThread().getId());
            return getSwappiData(this.id);
        } catch (IOException e) {
            throw new InterruptedException(e.getMessage());
        }
    }

    public String getSwappiData(int id) throws MalformedURLException, IOException {
        URL url = new URL("https://swapi.co/api/people/" + id);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        con.setRequestProperty("User-Agent", "server");
        Scanner scan = new Scanner(con.getInputStream());
        String jsonStr = null;
        if (scan.hasNext()) {
            jsonStr = scan.nextLine();
        }
        scan.close();
        return jsonStr;
    }
}
