var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports={
    development: {
        rootPath: rootPath,
        db: 'mongodb://adminzoro:jagarajugara@ds061839.mongolab.com:61839/barmanager_data_base',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://adminzoro:jagarajugara@ds061839.mongolab.com:61839/barmanager_data_base',
        port: process.env.PORT || 3030
    }

};
