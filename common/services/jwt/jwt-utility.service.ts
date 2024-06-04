import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtUtilityService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
  }

  async sign(payload: any) {
    try {

      return this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
        expiresIn: `${this.configService.get('JWT_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`,
      });

    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async verify(token: string) {
    try {

      return await this.jwtService.verify(token, {
        secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      });

    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}