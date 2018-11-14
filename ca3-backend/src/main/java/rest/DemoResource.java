package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.concurrent.ExecutionException;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

@Path("info")
public class DemoResource {

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("user")
    @RolesAllowed("user")
    public String getFromUser()
    {
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from USER: " + user + "\"";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("sw/{amount}")
    public String getStarWars(@PathParam("amount") int amount) throws InterruptedException, ExecutionException
    {
        StarWarsFuture sw = new StarWarsFuture();
        return sw.StarWarsFetcher(amount);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("admin")
    @RolesAllowed("admin")
    public String getFromAdmin()
    {
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from ADMIN" + user + "\"";
    }
}
