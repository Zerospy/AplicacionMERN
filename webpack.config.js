module.exports =  {
entry: './src/app/index.js', 
output: {

    path: __dirname + '/src/public',
    filename: 'bundle.js'
},
 module: {
        rules: [
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
                            }
                    ]
                }
            };