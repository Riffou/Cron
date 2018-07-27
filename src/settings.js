var config = {
    local: {
        host: '10.0.2.15'
    },
    localDocker: {
        host: '10.0.2.15'
    },
    preprod: {
        host : '10.1.48.114'
    }
}

module.exports = {
    config: function(mode) {
        return config[mode || process.argv[2] || 'local'] || config.local;
    }
}

