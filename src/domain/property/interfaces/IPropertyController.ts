import type { AddressProperties } from '@domain/properties/address'

export interface IPropertyController{
    createProperty(id: string, name: string, address: AddressProperties) : void
}