import { PersonProperties } from '@domain/persons/entities/Person'
import { ServiceProperties } from '@domain/properties/service'
import { PropertyProperties } from '@domain/property/Property'

export interface BookingProperties{
    id: string
    property: PropertyProperties
    guests: PersonProperties[]
    services: ServiceProperties[]

    checkInDate: Date
    checkOutDate: Date
}

export class Booking implements BookingProperties{
    id: string
    guests: PersonProperties[]
    property: PropertyProperties
    services: ServiceProperties[]
    checkInDate: Date
    checkOutDate: Date

    constructor(
        id: string,
        property: PropertyProperties,
        guests: PersonProperties[],
        services: ServiceProperties[],
        checkInDate: Date,
        checkOutDate: Date
    ) {
        this.id = id
        this.guests = guests
        this.property = property
        this.services = services
        this.checkInDate = checkInDate
        this.checkOutDate = checkOutDate
    }
}