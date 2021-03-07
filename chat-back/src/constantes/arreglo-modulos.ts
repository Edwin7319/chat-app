import { UsuarioModule } from '../modulos/usuario/usuario.module';
import { SalaModule } from '../modulos/sala/sala.module';
import { SalaUsuarioModule } from '../modulos/sala-usuario/sala-usuario.module';
import { ChatGateway } from '../gateway/chat/chat.gateway';

export const ARREGLO_MODULOS = [
  UsuarioModule,
  SalaModule,
  SalaUsuarioModule,
  ChatGateway,
];