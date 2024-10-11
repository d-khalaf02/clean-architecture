import { BookingService } from '@application/booking/BookingService'
import { BookingFaker } from '@application/faker/BookingFaker'
import { PersonFaker } from '@application/faker/PersonFaker'
import { PropertyFaker } from '@application/faker/PropertyFaker'
import { CreatePropertyService } from '@application/property/CreatePropertyService'
import type { BookingProperties } from '@domain/booking/Booking'
import type { IBookingController } from '@domain/booking/interfaces/IBookingController'
import type { IBookingRepository } from '@domain/booking/interfaces/IBookingRepository'
import type { IBookingService } from '@domain/booking/interfaces/IBookingService'
import type { PersonProperties } from '@domain/persons/entities/Person'
import type { ICreatePropertyService } from '@domain/property/interfaces/ICreatePropertyService'
import type { IPropertyController } from '@domain/property/interfaces/IPropertyController'
import type { IPropertyRepository } from '@domain/property/interfaces/IPropertyRepository'
import { TYPES } from '@domain/types/types'
import { BookingRepository } from '@infrastructure/src/Repositories/BookingRepository'
import { InMemoryPropertyRepository } from '@infrastructure/src/Repositories/PropertyRepository'
import { type IUseFaker, UseFaker } from '@infrastructure/src/wrapper/useFaker'
import { AsyncContainerModule, interfaces } from 'inversify'
import { BookingController } from '../../interface/Booking/Controllers/BookingController'
import { PropertyController } from '../../interface/Property/Controllers/PropertyController'

export const infrastructureContainerModule = new AsyncContainerModule(async(bind: interfaces.Bind) => {
    bind<ICreatePropertyService>(TYPES.CreatePropertyService).to(CreatePropertyService)
    bind<IPropertyRepository>(TYPES.PropertyRepository).to(InMemoryPropertyRepository)
    bind<IPropertyController>(TYPES.PropertyController).to(PropertyController)


    bind<IUseFaker>(TYPES.UseFaker).to(UseFaker)

    bind<PersonProperties>(TYPES.PersonFaker).to(PersonFaker)
    bind<PersonProperties>(TYPES.PropertyFaker).to(PropertyFaker)
    bind<BookingProperties>(TYPES.BookingFaker).to(BookingFaker)

    bind<IBookingRepository>(TYPES.BookingRepository).to(BookingRepository)
    bind<IBookingService>(TYPES.BookingService).to(BookingService)
    bind<IBookingController>(TYPES.BookingController).to(BookingController)
})