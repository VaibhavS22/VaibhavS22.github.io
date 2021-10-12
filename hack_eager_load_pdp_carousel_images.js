// Don't use this or import this anywhere.. To make amends .. Minify and babelify this file via link  and copy paste the output in SSR

;(() => {
  const elgibleProductsToColor = {
    '2067473662063': ['black'],
  }

  function queryStringToObject(url) {
    return [...new URLSearchParams(url.split('?')[1])].reduce(
      (a, [k, v]) => ((a[k] = v), a),
      {},
    )
  }

  function eagerLoadCarouselImages() {
    let expBucket = window.experimentManager.getBucketForUser('product_images')
    const productId = document.querySelector('.product_page')?.dataset
      ?.productId

    const queryParams = queryStringToObject(window?.location?.href)
    let { color } = queryParams
    if (!color) {
      // grab first color from color list
      color = document.querySelector('input[name="Color"]')?.value
      if (color)
        color = color
          .toString()
          .split(' ')
          .join('-')
          .toLowerCase()
    }

    if (!(elgibleProductsToColor?.[productId] ?? []).includes(color))
      expBucket = 'control'

    const carouselImageElementNodeList = document.querySelectorAll(
      '.eager_load_carousel_image__'.concat(color, '__').concat(expBucket),
    )
    carouselImageElementNodeList.forEach(node => {
      node.style.display = 'block'
    })
  }

  function eagerLoadWithExperimentManager() {
    window.psuedoExperimentSelector = document.createElement('div')
    window.psuedoExperimentSelector.addEventListener(
      'experimentmanager:init',
      eagerLoadCarouselImages,
    )
  }

  window.addEventListener('DOMContentLoaded', eagerLoadWithExperimentManager)
})()
