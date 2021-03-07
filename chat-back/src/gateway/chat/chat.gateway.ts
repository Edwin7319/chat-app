import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor() {
  }

  afterInit(server: any): any {
    console.log('ha iniciado la coneccion con sockets');
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log(client);
    console.log(`Ha iniciado la sesion el cliente ${client.id}`);
  }

  handleDisconnect(client: any): any {
    console.log(client);
    console.log(`Ha serrado sesion el cliente ${client.id}`);
  }

}