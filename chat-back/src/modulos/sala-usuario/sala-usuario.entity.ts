import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PrincipalEntity } from '../../clases-genericas/principal.entity';
import { SalaEntity } from '../sala/sala.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity('salausuario')
export class SalaUsuarioEntity extends PrincipalEntity {

  @ManyToOne(
    type => SalaEntity,
    sala => sala.salasUsuario,
    {
      cascade: true
    }
  )
  @JoinColumn({
    name: 'salaId'
  })
  sala: number | SalaEntity;

  @ManyToOne(
    type => UsuarioEntity,
    usuario => usuario.salasUsuario,
    {
      cascade: true
    }
  )
  @JoinColumn({
    name: 'usuarioId'
  })
  usuario: number | SalaEntity;

}