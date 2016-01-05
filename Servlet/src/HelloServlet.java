import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class HelloServlet extends HttpServlet
{

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
    throws ServletException,IOException
    {
        response.setContentType("text/html; charset=gb2312");
        PrintWriter out = response.getWriter();
        out.println("This is a Servlet");
    }
}
