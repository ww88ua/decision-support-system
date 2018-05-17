package main.application.service;

import com.beust.jcommander.internal.Lists;
import it.ozimov.springboot.mail.model.Email;
import it.ozimov.springboot.mail.model.defaultimpl.DefaultEmail;
import it.ozimov.springboot.mail.service.EmailService;
import main.application.model.User;
import main.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.nio.charset.Charset;
import java.util.List;

@Service
public class UserService {

  @Autowired
  UserRepository repository;

  @Autowired
  public EmailService emailService;

  public User loginUser(String email, String password) {
    User user = repository.getUserByEmail(email);
    if (user.getPassword().equals(password)) return user;
    return  null;
  }

  public void addNewExpert(User user) {
    sendEmail(user.getEmail(), user.getName(), user.getPassword());
    repository.save(user);
  }

  public User findUserByEmail(String email) {
    return repository.getUserByEmail(email);
  }

  public User findUserById(long id) {
    return repository.getUserById(id);
  }

  public List<User> getAllUsers() {
    return repository.getUsersByAdminIsFalse();
  }

  private void sendEmail(String to, String name, String password){
    Email email = null;
    try {
      email = DefaultEmail.builder()
        .from(new InternetAddress("decisionssystemadm@gmail.com"))
        .to(Lists.newArrayList(new InternetAddress(to)))
        .subject("Регистрация в Decision Support System")
        .body(name+", Вы были зарегистрированы в системе поддержки принятия решения Decision Support System. \n"+
              "Пароль для входа: "+password+"\n"+
              "Теперь Вы можете авторизоваться по ссылке http://localhost:4200/login и приступить к решению проблем, к которым Вы были добавлены.")
        .encoding(String.valueOf(Charset.forName("UTF-8"))).build();
    } catch (AddressException e) {
      e.printStackTrace();
    }

    emailService.send(email);
  }

}
