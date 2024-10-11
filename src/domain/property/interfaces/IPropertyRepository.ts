// A port for saving Properties

import type { PropertyProperties } from '@domain/property/Property'

export interface IPropertyRepository{
    findById : (id: string) => PropertyProperties | null
    save: (property: PropertyProperties) => void
}