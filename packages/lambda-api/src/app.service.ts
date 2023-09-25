import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getNextMessage(): Promise<string> {
    return 'Hello world';
  }
}
