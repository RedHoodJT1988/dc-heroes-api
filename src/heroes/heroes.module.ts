import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSchema } from './schemas/hero.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Hero", schema: HeroSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}