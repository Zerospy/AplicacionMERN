module.exports =  {
entry:['materialize-loader!./materialize.config.js',
            './src/app/index.js',  
                ], 
output: {

    path: __dirname + '/src/public',
    filename: 'bundle.js'
},
 module: { 


        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
                {
            test: /\.js$/,
          // Esto es un objeto por ende va en {}
               use: { 
                        loader: 'babel-loader', //Gracias a este webpack Loader webpack puede comunicarse con babel
               //Expresion regular, significa toma todos los javascript que encuentres.
                 options: { 
                            presets: ['@babel/preset-react']
                 }            
            } ,
               exclude: /node_modules/
                            },
                         
                            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                                use:{
                                loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                            },
                                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                                     use:{
                            loader: 'file-loader' }
                                           },
                                                {
                                                 test: /\.(png|svg|jpg|gif)$/,
                                             use: [
                                                  'file-loader',
                                            ],
                                             },
                                             {test: /\.s?css/,
                                            use: 
                                                    "style"}
                                        ],
                                    }
                                };