import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class PrincipalEntity {

  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int'
  })
  id: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
  updatedAt: Date;

  @Column({
    name: 'habilitado',
    type: 'smallint',
    default: 1
  })
  habilitado: 1 | 0 = 1;
}
