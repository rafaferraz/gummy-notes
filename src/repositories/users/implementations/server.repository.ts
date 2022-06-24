import { debuglog } from 'util';
import Token from '../../../models/token.model';
import User, { UserProps } from '../../../models/user.model';
import IHttpClient from '../../../services/http/i.client';
import { CreateUserDto } from '../dto/create';
import IUsersRepository from '../i.repository';

export default class ServerUsersRepository implements IUsersRepository {
  constructor(private readonly _httpClient: IHttpClient) {}

  async create(credentials: CreateUserDto): Promise<User | undefined> {
    try {
      const result = await this._httpClient.post<UserProps>(`/users`, credentials);
      const user = User.fromJson(result.data);
      return user;
    } catch (e) {
      debuglog(`ServerUsersRepository.create: ${e}`);
    }
  }

  async findOne(): Promise<User | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.get<UserProps>(`/users`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const user = User.fromJson(result.data);
      return user;
    } catch (e) {
      debuglog(`ServerUsersRepository.findOne: ${e}`);
    }
  }
}
