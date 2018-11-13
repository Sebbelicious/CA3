package rest;

import java.util.Set;
import javax.ws.rs.core.Application;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;

@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

  @Override
  public Set<Class<?>> getClasses() {
    Set<Class<?>> resources = new java.util.HashSet<>();
    resources.add(RolesAllowedDynamicFeature.class);
    addRestResourceClasses(resources);
    return resources;
  }

  /**
   * Do not modify addRestResourceClasses() method. It is automatically
   * populated with all resources defined in the project. If required, comment
   * out calling this method in getClasses().
   */
  private void addRestResourceClasses(Set<Class<?>> resources) {
    resources.add(cors.CorsRequestFilter.class);
    resources.add(cors.CorsResponseFilter.class);
    resources.add(exceptions.GenericExceptionMapper.class);
    resources.add(rest.DemoResource.class);
        resources.add(security.JWTAuthenticationFilter.class);
        resources.add(security.LoginEndpoint.class);
  }

}
