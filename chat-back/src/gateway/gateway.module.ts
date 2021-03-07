import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [ChatGateway],
  exports: [ChatGateway]
})
export class GatewayModule {}
