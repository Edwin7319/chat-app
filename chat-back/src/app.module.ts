import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/config';
import { DatabaseType } from 'typeorm';
import { ARREGLO_ENTIDADES } from './constantes/arreglo-entidades';
import { ARREGLO_MODULOS } from './constantes/arreglo-modulos';

const mysqlType: DatabaseType = 'mysql';

@Module({
  imports: [
    ...ARREGLO_MODULOS,
    TypeOrmModule.forRoot({
      type: mysqlType,
      host: environment.dataBase.mySql.host,
      port: environment.dataBase.mySql.port,
      username: environment.dataBase.mySql.username,
      password: environment.dataBase.mySql.password,
      database: environment.dataBase.mySql.database,
      entities: [
        ...ARREGLO_ENTIDADES
      ],
      synchronize: true,
      dropSchema: true
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
