import { Mock } from '@application/faker/Mock'
import type { IBookingService } from '@domain/booking/interfaces/IBookingService'
import type { PersonProperties } from '@domain/persons/entities/Person'
import type { ServiceProperties } from '@domain/properties/service'
import type { PropertyProperties } from '@domain/property/Property'
import { PERSON_TYPES } from '@domain/types/personTypes'
import { TYPES } from '@domain/types/types'
import { infrastructureContainerModule } from '@infrastructure/src/container'
import { Container, inject, injectable } from 'inversify'

const initalizeContainer = async () => {
    const container = new Container()
    await container.loadAsync(infrastructureContainerModule)
    return container
}

@injectable()
export class BookingController{
    constructor(
        @inject(TYPES.BookingService)private bookingService: IBookingService,
    ) {}

    async createBooking(id: string, services: ServiceProperties[], checkInDate: Date, checkOutDate: Date){
        const container = await initalizeContainer()
        const property = await this.getProperty()
        const guests = await this.getGuests()

        container.bind<PropertyProperties>(TYPES.Property).toConstantValue(property)
        container.bind<PersonProperties[]>(TYPES.Guests).toConstantValue(guests)

        try{
            this.bookingService.create(
                id,
                services,
                checkInDate,
                checkOutDate
            )
            console.log("new Booking created")
            console.log(`
            ID: ${id},
            Property ID: ${property.id},
            Property Owner's Name: ${property.owner.name},
            Property located at: ${property.address.street},${property.address.zip} ${property.address.city},
            Guests: ${guests.map(guest => guest.name)},
            Check In Date: ${checkInDate},
            Check Checkout Date: ${checkOutDate},
            Services: ${services.map(service => service.name)}
            `)
        }catch (e){
            console.log(e)
        }
    }

    private async getProperty(){
        const container = await initalizeContainer()
        try{
            return container.get<PropertyProperties>(TYPES.Property)
        }catch(e){
            return Mock.property()
        }

    }

    private async getGuests(){
        const container = await initalizeContainer()
        try{
            return container.get<PropertyProperties[]>(TYPES.Guests)
        }
        catch(e){
            return [
                await Mock.person(PERSON_TYPES.Guest)
            ]
        }

    }
}