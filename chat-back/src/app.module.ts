import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/config';
import { DatabaseType } from 'typeorm';
import { ARREGLO_ENTIDADES } from './constantes/arreglo-entidades';
import { ARREGLO_MODULOS } from './constantes/arreglo-modulos';

const dbType: DatabaseType = 'postgres';

@Module({
  imports: [
    ...ARREGLO_MODULOS,
    TypeOrmModule.forRoot({
      type: dbType,
      host: environment.dataBase.postgeSql.host,
      port: +environment.dataBase.postgeSql.port,
      username: environment.dataBase.postgeSql.username,
      password: environment.dataBase.postgeSql.password,
      database: environment.dataBase.postgeSql.database,
      entities: [
        ...ARREGLO_ENTIDADES
      ],
      synchronize: true,
      dropSchema: false
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {
}
