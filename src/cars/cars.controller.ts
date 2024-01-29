import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service'
import { CreateCarDTO } from './dto/create-car.dto'

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
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return createCarDTO;
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
