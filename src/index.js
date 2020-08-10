const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

const app = express();

//Ajustes
app.set('port', process.env.PORT || 3000 );   //el || 3000 lo ponemos porque estamos trabajando local, si tuvieramos servicio en la nube no iria aqui.

//Middlewares
app.use(morgan('dev'));  
app.use(express.json());   // este middl    eware permite enviar y recibir datos tipo json , va excelente con mongodb 


//Routes
app.use('/api/tasks', require('./routes/task.routes'));  //Cada vez que ingresamos a la direccion /api/tasks nos redirecciona a la ruta del require

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//inicializar el servidor

app.listen(app.get('port'), ()=>   {console.log(`Server on port ${app.get('port')}`)
            });  
            
