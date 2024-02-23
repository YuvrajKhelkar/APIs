// auto/auto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auto } from '../entities/auto.entity';
import { Auto2 } from '../entities/auto2.entity';


@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(Auto)
    private readonly autoRepository: Repository<Auto>,
    @InjectRepository(Auto2)
    private readonly auto2Repository: Repository<Auto2>,
  ) {}

  async getAllAutos(): Promise<Auto[]> {
    return this.autoRepository.find();
  }

  async getAllAuto2s(): Promise<Auto2[]> {
    return this.auto2Repository.find();
  }
}
