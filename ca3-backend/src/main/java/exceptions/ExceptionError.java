package exceptions;

import java.io.PrintWriter;
import java.io.StringWriter;
import javax.servlet.ServletContext;
import javax.ws.rs.core.Context;

/**
 *
 * @author adams
 */
public class ExceptionError {

    @Context
    ServletContext context;
    private final int code;
    private String message;
    private String description;
    private String stacktrack;

    public ExceptionError(Throwable ex, int code, boolean debug) {
        this.code = code;
        this.message = ex.getMessage();

        if (debug) {
            StringWriter sw = new StringWriter();
            ex.printStackTrace(new PrintWriter(sw));
            this.stacktrack = sw.toString();
        }
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
