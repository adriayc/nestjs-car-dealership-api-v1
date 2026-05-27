import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // A nivel de clase
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  // getCarById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe) // A nivel de método
  createCar(@Body() createCarDto: CreateCarDto) {
    return { createCarDto };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id') id: number) {
    return { id };
  }
}
