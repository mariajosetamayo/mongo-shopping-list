exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://jack:jack@ds023118.mlab.com:23118/blackjack' : 
                           // 'mongodb://mariajosetamayo:ShihoNague784@ds023105.mlab.com:23105/shopping-list' :
                            'mongodb://localhost/shopping-list');
exports.PORT = process.env.PORT || 8080;


                        // 'mongodb://<mariajosetamayo>:<ShihoNague784>@ds023105.mlab.com:23105/shopping-list'
                     