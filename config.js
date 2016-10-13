exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://<mariajosetamayo>:<ShihoNague784>@ds023105.mlab.com:23105/shopping-list':
                            'mongodb://<mariajosetamayo>:<ShihoNague784>@ds023105.mlab.com:23105/shopping-list-dev');



                            // 'mongodb://localhost/shopping-list' :
                            // 'mongodb://localhost/shopping-list-dev');
                            
exports.PORT = process.env.PORT || 8080;