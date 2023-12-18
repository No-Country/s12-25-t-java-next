package com.AlaCartApp.config;

import com.AlaCartApp.config.jwtconfig.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityWeb {

    //  private final JwtAuthenticationFilter jwtAutenticationFilter;
    //  private final AuthenticationProvider authenticationProvider;


    // @Bean
            //  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        //  return http.csrf(AbstractHttpConfigurer::disable)
                //         .authorizeHttpRequests
                //                 ((authRequest) -> authRequest
                 //               .requestMatchers("/api/v1/**/adm")
    //          .hasRole("ADMIN")
                                //                          .anyRequest()
                                //                           .authenticated()
                                //                   ).sessionManagement(sessionManager -> sessionManager
                                //                   .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                        //           .authenticationProvider(authenticationProvider)
        //           .addFilterBefore(jwtAutenticationFilter, UsernamePasswordAuthenticationFilter.class)
        //          .build();
    //}

    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf().disable()
                .authorizeRequests().anyRequest().permitAll();
//                .requestMatchers("/api/v1/**").hasRole("")
          /*      .requestMatchers("/api/v1/**").hasAnyRole()
                .requestMatchers("/api/v1/**").permitAll()
                .and().formLogin(
                        form-> form
                                .loginPage("/login")
                                .permitAll()
                                .successForwardUrl("/login/redilogin") // En caso de una autenticacion correcta redirige a "/thymeleaf/redilogin" que esta en LoginController
                ).logout(
                        logout -> logout
                                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                                .logoutSuccessUrl("/login") // A donde redirige cuando cierro sesion
                                .invalidateHttpSession(true)
                                .deleteCookies("JSESSIONID")
                                .permitAll()
                ).exceptionHandling()
                .accessDeniedPage("/login/accesoD");*/
        return http.build();
    }
}
