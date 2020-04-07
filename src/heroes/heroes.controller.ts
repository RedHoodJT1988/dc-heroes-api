import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero-dto';
import { HeroesService } from './heroes.service';
import { Hero } from './interfaces/hero.interface';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}
  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Hero> {
    return this.heroesService.findOne(id);
  }

  @Post()
  createHero(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    return this.heroesService.createHero(createHeroDto);
  }

  @Delete(':id')
  deleteHero(@Param('id') id): Promise<Hero> {
    return this.heroesService.delete(id);
  }

  @Put(':id')
  update(@Body() updateHeroDto: CreateHeroDto, @Param('id') id): Promise<Hero> {
    return this.heroesService.update(id, updateHeroDto);
  }
}
