// src/entities/auto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Auto')
export class Auto {
  @PrimaryGeneratedColumn()
  sNo: number;

  @Column({ nullable: true })
  deviceName: string;

  @Column('numeric')
  distanceInCm: number;

  @Column({ nullable: true })
  currentTimeStamp: string;
}
