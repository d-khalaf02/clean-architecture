import { createPersonInstance } from '@application/persons/createPerson'
import type { BookingProperties } from '@domain/booking/Booking'
import { PersonProperties } from '@domain/persons/entities/Person'
import { PropertyManager } from '@domain/persons/entities/PropertyManager'
import type { ICreatePropertyService } from '@domain/property/interfaces/ICreatePropertyService'
import { PropertyProperties } from '@domain/property/Property'
import { PERSON_TYPES } from '@domain/types/personTypes'
import { TYPES } from '@domain/types/types'

import { infrastructureContainerModule } from '@infrastructure/src/container'
import { Container } from 'inversify'

const initializeContainer = async () => {
    const container = new Container()
    await container.loadAsync(infrastructureContainerModule)
    return container
}


export class Mock{
    static async person(personType: PERSON_TYPES):Promise<PersonProperties>{
        const container = await initializeContainer()
        const person = container.get<PersonProperties>(TYPES.PersonFaker)

        return createPersonInstance(
            personType,
            person.id,
            person.name,
            person.address
        )
    }

    static async property(owner?: PersonProperties, propertyManager?: PersonProperties): Promise<PropertyProperties>{
        const container = await initializeContainer()
        const createPropertyService = container.get<ICreatePropertyService>(TYPES.CreatePropertyService)
        const propertyFaker = container.get<PropertyProperties>(TYPES.PropertyFaker)
        const property : PropertyProperties = {
            id: propertyFaker.id,
            name: propertyFaker.name,
            address: propertyFaker.address,
            owner: owner || propertyFaker.owner,
            propertyManager: propertyManager || propertyFaker.propertyManager
        }

        try{
            createPropertyService.create(property)
        }catch (e){
            console.log(e)
        }

        return property
    }

    static async booking(){
        const container = await initializeContainer()
        return container.get<BookingProperties>(TYPES.BookingFaker)

    }
}