import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({

  controllers: [TestController],

  providers: [TestService]
})
export class ShareModuleModule {}
