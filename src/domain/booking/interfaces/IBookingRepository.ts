import type { BookingProperties } from '@domain/booking/Booking'

export interface IBookingRepository{
    findById(id: string): BookingProperties | null
    save(booking: BookingProperties): void
}