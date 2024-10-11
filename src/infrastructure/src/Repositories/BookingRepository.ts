import type { BookingProperties } from '@domain/booking/Booking'
import type { IBookingRepository } from '@domain/booking/interfaces/IBookingRepository'
import { injectable } from 'inversify'

@injectable()
export class BookingRepository implements IBookingRepository{
    private bookings : BookingProperties[] = []
    findById(id: string): BookingProperties | null {
        return this.bookings.find(booking => booking.id === id) || null
    }
    save(booking: BookingProperties): void {
        this.bookings.push(booking)
    }

}