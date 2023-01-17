package security.services;
import com.tba.backend.model.Role;
import com.tba.backend.model.User;
import com.tba.backend.repository.RoleRespository;
import com.tba.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRespository roleRespository;
    @Override
    public User saveUser(User user){
       return userRepository.save(user);
    }
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }
    public User getUserByUsername(String name) { return userRepository.findFirstByUsername(name);}

    public void setUserRole(String rolename, String username){

        Role role = roleRespository.findFirstByName(rolename);
        User user = userRepository.findFirstByUsername(username);
        user.setRole(role);
        userRepository.save(user);
        }
}
