import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';
import { Model } from 'mongoose';
import {InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HeroesService {
  constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) {}

  async findAll(): Promise<Hero[]> {
    return await this.heroModel.find();
  }

  async findOne(id: string): Promise<Hero> {
    return await this.heroModel.findOne({ _id: id});
  }

  async createHero(hero: Hero): Promise<Hero> {
    const newHero = new this.heroModel(hero);
    return await newHero.save();
  }

  async delete(id: string): Promise<Hero> {
    return await this.heroModel.findByIdAndRemove(id);
  }

  async update(id: string, hero: Hero): Promise<Hero> {
    return await this.heroModel.findByIdAndUpdate(id, hero, { new: true});
  }

  
}
