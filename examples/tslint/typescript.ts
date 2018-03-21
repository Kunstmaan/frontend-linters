type UserRole = 'Employee' | 'Manager';
type UserPermission = 'Allowed' | 'Blocked';

interface IUser {
    roles: UserRole[];
    permissions: UserPermission[];
    // Other stuff
}

interface IRoute {
    requiredRole: UserRole;
    requiredPermission: UserPermission;
    // Other stuff
}

function canUserAccess(user: IUser, route: IRoute) {
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
    permissions: UserPermission[],
    roles: UserRole[],
    route: IRoute,
}): boolean {
    return hasPermissionForRoute(permissions, route) && hasRoleForRoute(roles, route);
}

function hasPermissionForRoute(permission: UserPermission[], route: IRoute): boolean {
    return permission.indexOf(route.requiredPermission) > -1;
}

function hasRoleForRoute(role: UserRole[], route: IRoute): boolean {
    return role.indexOf(route.requiredRole) > -1;
}

export { canUserAccess };
