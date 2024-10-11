import type { ServiceProperties } from '@domain/properties/service'

export interface IBookingController{
    createBooking(
        id: string,
        services: ServiceProperties[],
        checkInDate: Date,
        checkOutDate: Date
    ): Promise<void>
}