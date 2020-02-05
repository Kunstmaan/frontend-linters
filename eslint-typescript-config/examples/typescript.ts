type UserRole = 'Employee' | 'Manager';
type UserPermission = 'Allowed' | 'Blocked';

interface IUser {
    roles: UserRole[];
    permissions: UserPermission[];
}

interface IRoute {
    requiredRole: UserRole;
    requiredPermission: UserPermission;
}

export { canUserAccess };

function canUserAccess(user: IUser, route: IRoute): boolean {
    const permissions = getUserPermissions(user);
    const roles = getUserRoles(user);

    return hasRouteAccess({
        permissions,
        roles,
        route,
    });
}

function getUserPermissions(user: IUser): UserPermission[] {
    return user.permissions;
}

function getUserRoles(user: IUser): UserRole[] {
    return user.roles;
}

function hasRouteAccess({
    permissions,
    roles,
    route,
}: {
    permissions: UserPermission[];
    roles: UserRole[];
    route: IRoute;
}): boolean {
    return hasPermissionForRoute(permissions, route) && hasRoleForRoute(roles, route);
}

function hasPermissionForRoute(permission: UserPermission[], route: IRoute): boolean {
    return permission.includes(route.requiredPermission);
}

function hasRoleForRoute(role: UserRole[], route: IRoute): boolean {
    return role.includes(route.requiredRole);
}

/**
 * Bad example, but shows the syntax - we do not allow fallthrough,
 * and we indent case deeper than switch
 */
function isPowerUserRole(role: UserRole): boolean {
    let isPowerUser = false;

    switch (role) {
        case 'Employee': {
            isPowerUser = false;
            break;
        }
        case 'Manager': {
            isPowerUser = true;
            break;
        }
        default:
            isPowerUser = false;
    }

    return isPowerUser;
}

console.log(isPowerUserRole('Employee'));
