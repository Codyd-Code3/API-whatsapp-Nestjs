import { HttpModule } from '@nestjs/axios';

//Ahora si hacemos uso de la clase que creamos, que es la clase inyectable 
//que hará uso de los headers configurados.

/**
 * Esto quiere decir que todos los metodos http que pasen por este archivo share-module
 * se le inyecten los headers que tenemos configurados en 'HttpConfigService'
 */

import { HttpConfigService } from 'src/httpService.config';

import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({

  //configuramos un import:
  /**
   * Y entonces aqui hacemos uso de la clase 'HttpConfigService' que contiene los
   * headers parametrizados
   * E importamos la clase 'ShareModuleModule' de este mismo archivo 'share-module'
   */
  imports: [
    HttpModule.registerAsync({
      useClass : HttpConfigService,
    }),
    ShareModuleModule

  ],

  controllers: [TestController],

  providers: [TestService]
})
export class ShareModuleModule {}
