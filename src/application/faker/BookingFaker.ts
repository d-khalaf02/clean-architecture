import type { PropertyFaker } from '@application/faker/PropertyFaker'
import type { BookingProperties } from '@domain/booking/Booking'
import type { PersonProperties } from '@domain/persons/entities/Person'
import type { ServiceProperties } from '@domain/properties/service'
import type { PropertyProperties } from '@domain/property/Property'
import { TYPES } from '@domain/types/types'
import type { IUseFaker } from '@infrastructure/src/wrapper/useFaker'
import { inject, injectable } from 'inversify'

@injectable()
export class BookingFaker implements BookingProperties{
    checkInDate: Date
    checkOutDate: Date
    guests: PersonProperties[]
    id: string
    property: PropertyProperties
    services: ServiceProperties[]

    constructor(
        @inject(TYPES.UseFaker) faker: IUseFaker,
        @inject(TYPES.PersonFaker) personFaker: PersonProperties,
        @inject(TYPES.PropertyFaker) propertyFaker: PropertyProperties,
    ) {
        this.id = "Booking."+ faker.number.int({min: 1000, max: 9999})
        this.services = [
            {
                name: faker.person.firstName(),
                description: faker.lorem.text(),
                price: faker.number.int({min: 15, max: 1000})
            },
            {
                name: faker.person.firstName(),
                description: faker.lorem.text(),
                price: faker.number.int({min: 15, max: 1000})
            },
        ]
        this.checkInDate = faker.date.past()
        this.checkOutDate = faker.date.soon()

        this.property = propertyFaker
        this.guests = [
            personFaker
        ]
    }
}