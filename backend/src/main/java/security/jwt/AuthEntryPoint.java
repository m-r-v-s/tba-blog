package security.jwt;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

import java.io.IOException;


public class AuthEntryPoint extends LoginUrlAuthenticationEntryPoint {
    public AuthEntryPoint(String loginFormUrl) {
        super(loginFormUrl);
    }

    @Override //  Implementations should modify the headers on the ServletResponse as necessary to commence the authentication process.
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
    //TODO Create a header so that the client can send the correct authentication proof needed
    }
}
