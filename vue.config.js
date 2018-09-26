const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                components: resolve('src/components'),
                views: resolve('src/views'),
                api: resolve('src/api'),
                common: resolve('src/common')
            }
        }
    }
}