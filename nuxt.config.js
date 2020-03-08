const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: 'dist'
    }
} : {};

const head = {
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChank} | AnDeriens Portfolio` : `AnDeriens Portfolio`
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ]
}

export default {
  modules: ['@nuxtjs/style-resources'],
  css: [
    'ress',
  ],
  styleResources: {
    scss: [
      '~assets/scss/_styles.scss',
    ]
  },
  ...routerBase,
  head
}
