import type { PropertyProperties } from '@domain/property/Property'

export interface ICreatePropertyService {
    create(_property: PropertyProperties): void
}