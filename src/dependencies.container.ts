import IAuthRepository from './repositories/auth/i.repository';
import ServerAuthRepository from './repositories/auth/implementations/server.repository';
import IBoardsRepository from './repositories/boards/i.repository';
import ServerBoardsRepository from './repositories/boards/implementations/server.repository';
import INotesRepository from './repositories/notes/i.repository';
import ServerNotesRepository from './repositories/notes/implementations/server.repository';
import IUsersRepository from './repositories/users/i.repository';
import ServerUsersRepository from './repositories/users/implementations/server.repository';
import AxiosHttpClient from './services/http/axios.client';

export default class DependenciesContainer {
  private static _instance: DependenciesContainer;

  static get instance(): DependenciesContainer {
    if (!DependenciesContainer._instance) {
      DependenciesContainer._instance = new DependenciesContainer();
    }
    return DependenciesContainer._instance;
  }

  private constructor(
    readonly resourcesClient: AxiosHttpClient = new AxiosHttpClient(
      process.env.NODE_ENV == 'production'
        ? `https://${process.env.NEXT_PUBLIC_PROD_API_HOST}${process.env.NEXT_PUBLIC_API_BASE_PATH}`
        : `https://${process.env.NEXT_PUBLIC_DEV_API_HOST}${process.env.NEXT_PUBLIC_API_BASE_PATH}`
    ),
    readonly authRepository: IAuthRepository = new ServerAuthRepository(resourcesClient),
    readonly usersRepository: IUsersRepository = new ServerUsersRepository(resourcesClient),
    readonly boardsRepository: IBoardsRepository = new ServerBoardsRepository(resourcesClient),
    readonly notesRepository: INotesRepository = new ServerNotesRepository(resourcesClient)
  ) {}
}
