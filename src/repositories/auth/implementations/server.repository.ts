import { debuglog } from 'util';
import Token, { TokenRepositoryProps } from '../../../models/token.model';
import IHttpClient from '../../../services/http/i.client';
import IAuthRepository from '../i.repository';

export default class ServerAuthRepository implements IAuthRepository {
  constructor(private readonly _httpClient: IHttpClient) {}

  async readToken(): Promise<Token | undefined> {
    try {
      const tokenPropsOnStorage = localStorage.getItem('token');
      if (!tokenPropsOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenPropsOnStorage));
      return token;
    } catch (e) {
      debuglog(`ServerAuthRepository.readToken: ${e}`);
    }
  }
  async login(data: { email: string; password: string }): Promise<boolean> {
    try {
      const response = await this._httpClient.post<TokenRepositoryProps>(`/auth/login`, data);
      const token = Token.fromJson(response.data);
      localStorage.setItem('token', JSON.stringify(token.toStorage()));
      const isTokenStored = localStorage.getItem('token') != null;
      return isTokenStored;
    } catch (e) {
      debuglog(`ServerAuthRepository.login: ${e}`);
      return false;
    }
  }
  async logout(): Promise<boolean> {
    try {
      localStorage.removeItem('token');
      const isTokenOutOfStorage = localStorage.getItem('token') == null;
      return isTokenOutOfStorage;
    } catch (e) {
      debuglog(`ServerAuthRepository.logout: ${e}`);
      return false;
    }
  }
  async refreshToken(): Promise<Token | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const response = await this._httpClient.post<TokenRepositoryProps>(`/auth/token/refresh`, {
        access_token: token.accessToken,
        refresh_token: token.refreshToken,
        expires_at: token.expiresAt
      });
      const newToken = Token.fromJson(response.data);
      localStorage.setItem('token', JSON.stringify(newToken.toStorage()));
      return newToken;
    } catch (e) {
      debuglog(`ServerAuthRepository.refreshToken: ${e}`);
      return;
    }
  }
}
