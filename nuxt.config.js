const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: 'dist'
    }
} : {};

const head = {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ]
}

module.exports = {
    ...routerBase,
    head
}
