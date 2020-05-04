const {io} = require('../server');

io.on('connection',(client)=>{

    console.log('Usuario Conectado');

    //manda un mensaje al cliente
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })

    //Escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{

        console.log(data);

        client.broadcast.emit('enviarMensaje',data);
        /* if(data.usuario){
            callback({
                respuesta:'Todo salio bien'
            });
        }else{
            callback({
                respuesta:'Todo salio mal'
            });
        } */

        //funcion que se llama cuando todo sale bien
        

    });

});