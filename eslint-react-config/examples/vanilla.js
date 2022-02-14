function canUserAccess(user, route) {
    const permissions = getUserPermissions(user);
    const roles = getUserRoles(user);

    return hasRouteAccess({
        permissions,
        roles,
        route,
    });
}

function getUserPermissions(user) {
    return user.permissions;
}

function getUserRoles(user) {
    return user.roles;
}

function hasRouteAccess({
    permissions,
    roles,
    route,
}) {
    return hasPermissionsForRoute(permissions, route) && hasRolesForRoute(roles, route);
}

function hasPermissionsForRoute(permissions, route) {
    return permissions.includes(route.requiredPermissions);
}

function hasRolesForRoute(roles, route) {
    return roles.includes(route.requiredRoles);
}

export { canUserAccess };

/**
 * Bad example, but shows the syntax - we do not allow fallthrough,
 * and we indent case deeper than switch
 */
function isPowerUserRole(role) {
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
