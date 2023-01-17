package security.services;

import com.tba.backend.model.Privilege;
import com.tba.backend.model.Role;
import com.tba.backend.model.User;
import com.tba.backend.repository.PrivilegeRepository;
import com.tba.backend.repository.RoleRespository;
import com.tba.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;
import java.util.Set;

public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    public UserService userService;

    @Autowired
    public RoleService roleService;

    @Autowired
    PrivilegeRepository privilegeRepository;
    @Override


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByUsername(username);
        if( user != null)
        {
            return new com.tba.backend.details.UserDetails(
                    user.getUsername(), user.getPassword(), getAuthorities(user.getRole()));

        }
        else {
            return new com.tba.backend.details.UserDetails( "", "", null);
        }
    }

    public Collection<? extends SimpleGrantedAuthority> getAuthorities(Role role){
        Collection<? extends SimpleGrantedAuthority> authorities;
            for ( Privilege privilege : roleService.getRolePrivileges(role.getId()))
            {
                authorities.add( new SimpleGrantedAuthority(privilege.getName()) )
            }
        
    }
}
