package main.application;



import it.ozimov.springboot.mail.configuration.EnableEmailTools;
import main.application.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
@EnableAutoConfiguration
@EnableEmailTools
public class Main {




	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}


}
