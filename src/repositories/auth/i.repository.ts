import Token from '../../models/token.model';

export default interface IAuthRepository {
  readToken(): Promise<Token | undefined>;
  login(data: { email: string; password: string }): Promise<boolean>;
  logout(): Promise<boolean>;
  refreshToken(): Promise<Token | undefined>;
}
