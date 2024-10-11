import type { IPropertyRepository } from '@domain/property/interfaces/IPropertyRepository'
import type { PropertyProperties } from '@domain/property/Property'
import { injectable } from 'inversify'

@injectable()
export class InMemoryPropertyRepository implements IPropertyRepository{
    private properties: PropertyProperties[] = []

    findById(id: string): PropertyProperties | null {
        return this.properties.find(property => property.id === id) || null
    }
    save(property: PropertyProperties): void {
        this.properties.push(property)
    }
}