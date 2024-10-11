import { faker, SexType } from '@faker-js/faker'
import { injectable } from 'inversify'

faker.date.past()
export interface IUseFaker{
    person: {
        firstName: (sex? : SexType) => string
    }
    number: {
        int: (options?: number | {min?: number, max?: number, multipleOf?: number}) => number
    }
    location: {
        street: () => string,
        zipCode: (options?: string | {state?: string, format?: string}) => string,
        city: () => string
    }
    lorem: {
        text: () => string
    }
    date: {
        past: (options?: {years?: number, refDate?: string | Date | number}) => Date,
        soon: (options?: {days?: number, refDate?: string | Date | number}) => Date
    }
}

@injectable()
export class UseFaker implements IUseFaker{
    person = {
        firstName: (sex? : SexType) => faker.person.firstName(sex)
    }
    number = {
        int: (options?: number | {min?: number, max?: number, multipleOf?: number}) => faker.number.int(options)
    }
    location = {
        street: () => faker.location.street(),
        zipCode: (options?: string | {state?: string, format?: string}) => faker.location.zipCode(options),
        city: () => faker.location.city()
    }
    lorem = {
        text: () => faker.lorem.text()
    }
    date = {
        past: (options?: {years?: number, refDate?: string | Date | number}) => faker.date.past(options),
        soon: (options?: {days?: number, refDate?: string | Date | number}) => faker.date.soon(options)
    }
}