import { ICreatePropertyService } from '@domain/property/interfaces/ICreatePropertyService'
import { IPropertyRepository } from '@domain/property/interfaces/IPropertyRepository'
import { Property, type PropertyProperties } from '@domain/property/Property'
import { TYPES } from '@domain/types/types'
import { injectable, inject} from 'inversify'

@injectable()
export class CreatePropertyService implements ICreatePropertyService{
    constructor(
        @inject(TYPES.PropertyRepository) private propertyRepository: IPropertyRepository
    ) {}
    create(_property: PropertyProperties){
        const property = new Property(
            _property.id,
            _property.name,
            _property.address,
            _property.owner,
            _property.propertyManager
        )
        this.propertyRepository.save(property)
    }
}