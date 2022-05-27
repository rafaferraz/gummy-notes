type UserProps = {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export default class User {
  id = '';
  name = '';
  email = '';
  password?: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  static fromJson(json: UserProps): User {
    const user = new User();
    user.id = json.id;
    user.name = json.name;
    user.email = json.email;
    user.createdAt = new Date(json.createdAt);
    user.updatedAt = new Date(json.updatedAt);
    return user;
  }

  toJson(): UserProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt.toUTCString(),
      updatedAt: this.updatedAt.toUTCString()
    };
  }
}
