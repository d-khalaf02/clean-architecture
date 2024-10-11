import type { PersonProperties } from '@domain/persons/entities/Person'
import { PERSON_TYPES } from '@domain/types/personTypes'

export interface ICreatePersonService{
    create(_person: PersonProperties, personType: PERSON_TYPES): void
}