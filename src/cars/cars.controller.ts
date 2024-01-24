import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service'
@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id') 
  getCarById(@Param('id') id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(
    @Param('id') id: string,
    @Body() body: any
  ) {
    return {
      body,
      id
    }    
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      method: 'delete',
      id
    };
  }


}
