package security.services;
import java.util.Set;

import com.tba.backend.model.Privilege;
import org.apache.catalina.Role;
import org.springframework.beans.factory.annotation.Autowired;

import com.tba.backend.repository.RoleRespository;

public class RoleServiceImpl implements RoleService{
    
    @Autowired
    private RoleRespository roleRepository;

   public Set<Privilege> getRolePrivileges(Long role_id)
    {
        return roleRepository.findPrivilegesByRoleID(role_id);
    }
}
