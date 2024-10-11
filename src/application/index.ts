import { infrastructureContainerModule } from '@infrastructure/src/container'
import { Container } from 'inversify'

export const initalizeContainer = async () => {
    const container = new Container()
    await container.loadAsync(infrastructureContainerModule)
    return container
}