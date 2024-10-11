import type { AddressProperties } from '@domain/properties/address'

export interface PersonProperties{
    id: string,
    name: string,
    address: AddressProperties
}

export abstract class Person implements PersonProperties{
    constructor(
        public id: string,
        public name: string,
        public address: AddressProperties
    ) {}
}