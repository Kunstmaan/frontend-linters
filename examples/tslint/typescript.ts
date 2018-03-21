type UserRole = 'Employee' | 'Manager';
type UserPermission = 'Allowed' | 'Blocked';

interface IUser {
    role: UserRole;
    permission: UserPermission;
    // Other stuff
}

interface IRoute {
    requiredRole: UserRole;
    requiredPermission: UserPermission;
    // Other stuff
}

function canUserAccess(user: IUser, route: IRoute) {
    const permission = getUserPermission(user);
    const role = getUserRole(user);

    return hasRouteAccess({
        permission,
        role,
        route,
    });
}

function getUserPermission(user: IUser): UserPermission {
    return user.permission;
}

function getUserRole(user: IUser): UserRole {
    return user.role;
}

function hasRouteAccess({
    permission,
    role,
    route,
}: {
    permission: UserPermission,
    role: UserRole,
    route: IRoute,
}): boolean {
    return hasPermissionForRoute(permission, route) && hasRoleForRoute(role, route);
}

function hasPermissionForRoute(permission: UserPermission, route: IRoute): boolean {
    return permission.includes(route.requiredPermission);
}

function hasRoleForRoute(role: UserRole, route: IRoute): boolean {
    return role.includes(route.requiredRole);
}

export { canUserAccess };
