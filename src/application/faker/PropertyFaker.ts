import type { PersonProperties } from '@domain/persons/entities/Person'
import type { PropertyProperties } from '@domain/property/Property'
import { TYPES } from '@domain/types/types'
import type { IUseFaker } from '@infrastructure/src/wrapper/useFaker'
import { injectable, inject } from 'inversify'


@injectable()
export class PropertyFaker implements PropertyProperties{
    address: { street: string; zip: string; city: string }
    id: string
    name: string
    owner: PersonProperties
    propertyManager: PersonProperties

    constructor(
        @inject (TYPES.UseFaker) faker: IUseFaker,
        @inject(TYPES.PersonFaker) personFaker: PersonProperties
    ) {
        this.id = "Property." + faker.number.int({min: 1000, max: 9999})
        this.name = faker.person.firstName()
        this.address = {
            street: faker.location.street(),
            zip: faker.location.zipCode('#####'),
            city: faker.location.city()
        }

        this.owner = personFaker
        this.propertyManager = personFaker
    }
}