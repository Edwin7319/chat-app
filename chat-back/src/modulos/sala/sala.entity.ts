import { Column, Entity, OneToMany } from 'typeorm';
import { PrincipalEntity } from '../../clases-genericas/principal.entity';
import { SalaUsuarioEntity } from '../sala-usuario/sala-usuario.entity';

@Entity('sala')
export class SalaEntity extends PrincipalEntity {

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 60,
    nullable: false
  })
  nombre: string;

  @Column({
    name: 'codigo',
    type: 'varchar',
    length: 30,
    nullable: false
  })
  codigo: string;

  @OneToMany(
    type => SalaUsuarioEntity,
    salaUsuario => salaUsuario.sala,
  )
  salasUsuario: SalaUsuarioEntity[];
}