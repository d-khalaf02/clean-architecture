import type { PersonProperties } from '@domain/persons/entities/Person'
import type { AddressProperties } from '@domain/properties/address'
import { ICreatePropertyService } from '@domain/property/interfaces/ICreatePropertyService'
import { TYPES } from '@domain/types/types'
import { PropertyProperties } from '@domain/property/Property'

import { injectable, inject } from 'inversify'



@injectable()
export class PropertyController{
    constructor(
         @inject(TYPES.CreatePropertyService) private createPropertyService: ICreatePropertyService,
         @inject(TYPES.Owner) private owner: PersonProperties,
         @inject(TYPES.PropertyManager) private propertyManager: PersonProperties
    ) {}

    createProperty(id: string, name: string, address: AddressProperties){
        const property : PropertyProperties = {
            id: id,
            name: name,
            address: address,
            owner: this.owner,
            propertyManager: this.propertyManager
        }

        try{
            this.createPropertyService.create(property)
            console.log(`New Property Added:`)
            console.log(property)
        }catch (error){
            console.log(`Faild to add property: ${property}`)
        }
    }
}