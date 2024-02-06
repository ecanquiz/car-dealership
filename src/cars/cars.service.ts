import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto'


@Injectable()
export class CarsService {

  private cars: Car[] = [{
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
  }, {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic'
  }, {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherooke'        
  }];

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id)

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }

    this.cars.push(car);
    
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDTO) {

    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !==id) {      
      throw new BadRequestException(`Car id ${updateCarDto.id} is not valid inside body`)
    }
    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {...carDB, ...updateCarDto, id};
        return carDB;
      } 
      return car;    
    })

    return carDB; //update car
  }

}
