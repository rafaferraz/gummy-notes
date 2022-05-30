import User from '../../models/user.model';
import { CreateUserDto } from './dto/create';

export default interface IUsersRepository {
  create(credentials: CreateUserDto): Promise<User | undefined>;
  findOne(): Promise<User | undefined>;
}
