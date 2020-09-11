module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/dsgvo': { page: '/dsgvo' },
            '/impressum': { page: '/impressum' }
        }
    }
}