const getters = {
    sidebar: state => state.app.sidebar,
    Mini: state => state.app.Mini,
    roles: state => state.user.roles,
    token: state => state.user.token,
    permission_routes: state => state.permission.routes,
    visitedViews: state => state.tagsView.visitedViews,
}
export default getters
