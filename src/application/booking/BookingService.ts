import { Booking, type BookingProperties } from '@domain/booking/Booking'
import type { IBookingRepository } from '@domain/booking/interfaces/IBookingRepository'
import type { IBookingService } from '@domain/booking/interfaces/IBookingService'
import { PersonProperties } from '@domain/persons/entities/Person'
import { ServiceProperties } from '@domain/properties/service'
import { PropertyProperties } from '@domain/property/Property'
import { TYPES } from '@domain/types/types'
import { inject, injectable } from 'inversify'

@injectable()
export class BookingService implements IBookingService{
    constructor(
        @inject(TYPES.BookingRepository) private bookingRepository: IBookingRepository,
        @inject(TYPES.Property) private property: PropertyProperties,
        @inject(TYPES.Guests) private guests: PersonProperties[]
    ) {}
    create(
        id: string,
        services: ServiceProperties[],
        checkInDate: Date,
        checkOutDate: Date,
    ){
        const booking = new Booking(
            id,
            this.property,
            this.guests,
            services,
            checkInDate,
            checkOutDate
        )
        this.bookingRepository.save(booking)
    }
}