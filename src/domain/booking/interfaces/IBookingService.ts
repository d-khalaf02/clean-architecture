import { ServiceProperties } from '@domain/properties/service'

export interface IBookingService{
    create(
        id: string,
        services: ServiceProperties[],
        checkInDate: Date,
        checkOutDate: Date
    ): void
}