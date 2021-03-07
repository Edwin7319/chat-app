import { Module } from '@nestjs/common';
import { SalaUsuarioService } from './sala-usuario.service';
import { SalaUsuarioController } from './sala-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaUsuarioEntity } from './sala-usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SalaUsuarioEntity], 'default'),
  ],
  providers: [SalaUsuarioService],
  controllers: [SalaUsuarioController],
  exports: [SalaUsuarioService]
})
export class SalaUsuarioModule {}
