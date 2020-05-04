let socket = io(); 

    // on - escuchar sucesos
    socket.on('connect',function(){
        console.log('Conectado al sevidor');
    });

    socket.on('disconnect',function(){
        console.log('Perdimos conexion con el servidor');
    })

    //emit para enviar informacion al servidor
    socket.emit('enviarMensaje',{
        usuario: 'Lizeth Parra',
        message:'Hola Mundo'
    }/* ,function(resp){
        console.log('respuesta del Server',resp);
    } */);

    //escuchar mensaje
    socket.on('enviarMensaje',function(mensaje){
        console.log('Servidor',mensaje);
    })
