import { Injectable } from '@nestjs/common';
import { commonConfig } from '@typescript-backend-cdk-starter/common';

@Injectable()
export class AppService {
  async getNextMessage(): Promise<string> {
    return commonConfig.PROJECT_NAME;
  }
}
