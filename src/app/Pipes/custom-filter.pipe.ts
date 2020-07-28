import { Pipe, PipeTransform } from '@angular/core';
/**
 * This custom Plant filter will filter the plants 
 * in the firebase list by names then display to the user.
 */

import { IPlants } from '../Interfaces/iplants';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {




  //filter plants by  their names
  transform(plants: IPlants[], searchTerm: string): any {
    if (!plants|| !searchTerm) {
        return plants;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return plants.filter(plant => (plant.name).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}

}
