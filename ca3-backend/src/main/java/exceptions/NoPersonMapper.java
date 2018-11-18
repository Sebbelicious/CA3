package exceptions;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import javax.servlet.ServletContext;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author adams
 */
@Provider
public class NoPersonMapper implements ExceptionMapper<IOException> {

    @Context
    ServletContext context;

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Override
    public Response toResponse(IOException e) {
        boolean debug = context.getInitParameter("debug").equals("true");
        ExceptionError ee = new ExceptionError(e, 404, debug);
        ee.setDescription("Tried to fetch person a person, with an id that was out of range. Max id value should be 87.");
        ee.setMessage("A problem occured with the server.");
        return Response.status(404).entity(GSON.toJson(ee)).type(MediaType.APPLICATION_JSON).build();
    }

}
