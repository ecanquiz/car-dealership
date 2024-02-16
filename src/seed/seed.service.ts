import { Injectable } from '@nestjs/common';
import { CARDS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brans.seed';

@Injectable()
export class SeedService {

  populateDB() {

    //CARDS_SEED;
    //BRANDS_SEED;
    return "Seed executed successfully";
  }

}
