import 'reflect-metadata'
import { Mock } from '@application/faker/Mock'
import type { IBookingController } from '@domain/booking/interfaces/IBookingController'
import { PersonProperties } from '@domain/persons/entities/Person'
import { IPropertyController } from '@domain/property/interfaces/IPropertyController'
import type { PropertyProperties } from '@domain/property/Property'
import { PERSON_TYPES } from '@domain/types/personTypes'
import { TYPES } from '@domain/types/types'
import { infrastructureContainerModule } from '@infrastructure/src/container'
import { Container } from 'inversify'

const initalizeContainer = async () => {
    const container = new Container()
    await container.loadAsync(infrastructureContainerModule)
    return container
}

(
    async () => {
        const container = await initalizeContainer()

        const owner = await Mock.person(PERSON_TYPES.Owner)
        const propertyManager = await Mock.person(PERSON_TYPES.PropertyManager)

        const guest1 = await Mock.person(PERSON_TYPES.Guest)
        const guest2 = await Mock.person(PERSON_TYPES.Guest)
        const guest3 = await Mock.person(PERSON_TYPES.Guest)

        container.bind<PersonProperties>(TYPES.Owner).toConstantValue(owner)
        container.bind<PersonProperties>(TYPES.PropertyManager).toConstantValue(propertyManager)
        container.bind<PersonProperties[]>(TYPES.Guests).toConstantValue(
            [guest1, guest2, guest3]
        )



        const property = await Mock.property(owner)
        container.bind<PropertyProperties>(TYPES.Property).toConstantValue(property)

        const booking = await Mock.booking()

        const propertyController = container.get<IPropertyController>(TYPES.PropertyController)
        const bookingController = container.get<IBookingController>(TYPES.BookingController)

        propertyController.createProperty(property.id, property.name, property.address)
        await bookingController.createBooking(
            booking.id,
            booking.services,
            booking.checkInDate,
            booking.checkOutDate
        )
    }
)()


