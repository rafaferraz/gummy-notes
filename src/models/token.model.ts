type TokenProps = {
  accessToken: string;
  refreshToken: string;
  userId: string;
  createdAt: Date | string;
  expiresAt: number;
};

export type TokenRepositoryProps = {
  access_token: string;
  refresh_token: string;
  userId: string;
  expires_at: number;
};

export default class Token {
  accessToken = '';
  refreshToken = '';
  createdAt = new Date();
  expiresAt = 0;
  userId = '';

  static fromJson(json: TokenRepositoryProps): Token {
    const token = new Token();
    token.accessToken = json.access_token;
    token.refreshToken = json.refresh_token;
    token.createdAt = new Date();
    token.expiresAt = json.expires_at;
    token.userId = json.userId;
    return token;
  }

  toJson(): TokenProps {
    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      createdAt: this.createdAt.toUTCString(),
      userId: this.userId,
      expiresAt: this.expiresAt
    };
  }

  toStorage(): TokenRepositoryProps {
    return {
      access_token: this.accessToken,
      refresh_token: this.refreshToken,
      expires_at: this.expiresAt,
      userId: this.userId
    };
  }

  get isValid(): boolean {
    return this.expiresAt > new Date().getMilliseconds();
  }
}
