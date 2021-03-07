import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaEntity } from './sala.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SalaEntity], 'default')
  ],
  providers: [SalaService],
  controllers: [SalaController],
  exports: [SalaService]
})
export class SalaModule {
}
