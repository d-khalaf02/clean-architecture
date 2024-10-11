import type { PersonProperties } from '@domain/persons/entities/Person'

export interface PropertyProperties{
    id: string
    name: string
    address: {
        street: string
        zip: string
        city: string
    }

    owner: PersonProperties
    propertyManager: PersonProperties
}

export class Property implements PropertyProperties{
    constructor(
        public id: string,
        public name: string,
        public address: {
            street: string;
            zip: string;
            city: string
        },
        public owner: PersonProperties,
        public propertyManager: PersonProperties
    ) {}
}