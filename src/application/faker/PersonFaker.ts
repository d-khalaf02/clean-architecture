import type { PersonProperties } from '@domain/persons/entities/Person'
import type { AddressProperties } from '@domain/properties/address'
import { TYPES } from '@domain/types/types'
import type { IUseFaker } from '@infrastructure/src/wrapper/useFaker'
import { inject, injectable } from 'inversify'

@injectable()
export class PersonFaker implements PersonProperties {
    name: string
    id: string
    address: AddressProperties

    constructor(@inject(TYPES.UseFaker) faker: IUseFaker){
        this.name = faker.person.firstName()
        this.id = "Person."+faker.number.int({min: 1000000000, max: 9999999999})
        this.address = {
            street: faker.location.street(),
            city: faker.location.city(),
            zip: faker.location.zipCode('#####')
        }
    }
}


export const unknownPerson = {
    name: '',
    id: 0,
    address: {
        street: '',
        city: '',
        zip: 11111
    }
}