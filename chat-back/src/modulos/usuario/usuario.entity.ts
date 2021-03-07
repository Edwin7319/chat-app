import { Column, Entity, OneToMany } from 'typeorm';
import { PrincipalEntity } from '../../clases-genericas/principal.entity';
import { SalaUsuarioEntity } from '../sala-usuario/sala-usuario.entity';

@Entity('usuario')
export class UsuarioEntity extends PrincipalEntity {

  @Column({
    name: 'nombres',
    type: 'varchar',
    length: 60,
    nullable: false
  })
  nombres: string;

  @Column({
    name: 'apellidos',
    type: 'varchar',
    length: 60,
    nullable: false
  })
  apellidos: string;

  @Column({
    name: 'correo',
    type: 'varchar',
    length: 60,
    nullable: false
  })
  correo: string;

  @Column({
    name: 'nick',
    type: 'varchar',
    length: 20,
    nullable: false
  })
  nick: string;

  @Column({
    name: 'sexo',
    type: 'varchar',
    length: 1,
    nullable: false
  })
  sexo: 'F' | 'M';

  @OneToMany(
    type => SalaUsuarioEntity,
    salaUsuario => salaUsuario.usuario
  )
  salasUsuario: SalaUsuarioEntity[];
}