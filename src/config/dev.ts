const config = {
    secure: {
        secretKey: 'fhdsfhasdl37982798xxsa970098#~$#^~fklajs'
    },
    mongo: {
        uri: 'mongodb://it-projects-1:aaaaaa111@firstcluster-shard-00-00-12flx.mongodb.net:27017,firstcluster-shard-00-01-12flx.mongodb.net:27017,firstcluster-shard-00-02-12flx.mongodb.net:27017/test?ssl=true&replicaSet=firstCluster-shard-0&authSource=admin&retryWrites=true',
        password: 'it-projects-1',
        database: 'itProjects'
    },
    server: {
        port: 4000,
        production: false
    }
};

export default config;