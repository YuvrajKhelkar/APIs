// src/entities/auto2.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Auto2')
export class Auto2 {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ name: 'phoneNo', type: 'character varying' })
  phoneNo: string;

  @Column({ nullable: true })
  city: string;

  @PrimaryGeneratedColumn()
  sNo: number;

}
