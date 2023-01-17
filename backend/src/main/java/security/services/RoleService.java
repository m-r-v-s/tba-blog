package security.services;
import java.util.Set;

import com.tba.backend.model.Privilege;

public interface RoleService {

    Set<Privilege> getRolePrivileges(Long role_id);
}
