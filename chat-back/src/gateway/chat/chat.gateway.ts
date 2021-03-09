import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor() {
  }

  afterInit(server: any): any {
    console.log('ha iniciado la coneccion con sockets');
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log(`Ha iniciado la sesion el cliente ${client.id}`);
  }

  handleDisconnect(client: any): any {
    console.log(`Ha cerrado sesion el cliente ${client.id}`);
  }

  @SubscribeMessage('unirseASala')
  unirseAMonitoreo(
    socket,
    room: string
  ) {
    socket
      .join(
        `chat-${room}`
      );
    return {
      mensaje: `Se ha unido a la sala ${room}`
    };
  }

  @SubscribeMessage('dejarSala')
  dejarSala(
    socketCliente,
    room: string
  ) {
    socketCliente
      .leave(
        `chat-${room}`
      );

    return { mensaje: `Abandono sala ${room}` };
  }

  @SubscribeMessage('enviarMensaje')
  enviarMensaje(
    socket,
    datos: {
      message: string,
      room: string,
      senderId: string,
    }
  ) {
    socket
      .to(
        'chat-' + datos.room.toString()
      )
      .emit(
        'seEmitioMensaje',
        datos
      );
    return {
      message: datos.message,
      senderId: datos.senderId
    };
  }
}
