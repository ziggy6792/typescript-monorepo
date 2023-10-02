import { Injectable } from '@nestjs/common';
import { commonConfig } from '@ts-monorepo/common';

@Injectable()
export class AppService {
  async getNextMessage(): Promise<string> {
    return commonConfig.PROJECT_NAME;
  }
}
