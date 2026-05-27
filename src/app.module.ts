import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Modulo principal
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
