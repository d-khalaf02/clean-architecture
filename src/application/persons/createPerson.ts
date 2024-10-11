import { Guest } from '@domain/persons/entities/Guest'
import { Owner } from '@domain/persons/entities/Ownter'
import { PropertyManager } from '@domain/persons/entities/PropertyManager'
import type { AddressProperties } from '@domain/properties/address'
import { PERSON_TYPES } from '@domain/types/personTypes'

export function createPersonInstance(
    person: PERSON_TYPES,
    id: string,
    name: string,
    address: AddressProperties
){

    switch(person){
        case PERSON_TYPES.PropertyManager:
            return new PropertyManager(id, name, address)
        case PERSON_TYPES.Owner:
            return new Owner(id, name, address)
        case PERSON_TYPES.Guest:
            return new Guest(id, name, address)
    }
}