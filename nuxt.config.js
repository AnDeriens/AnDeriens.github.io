const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: 'dist'
    }
} : {};

module.exports = {
    ...routerBase
}
