import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";

/*
explicación @inyectable

cuando tenemos la etiqueta 'injectable' esto nos indica que la clase que se vaya
a crear se permite manejar con inyeccion de dependencia:

La inyección de dependencia (DI, por sus siglas en inglés) es un patrón de diseño que permite desacoplar las dependencias de una clase. En lugar de tener una clase que cree sus propias dependencias (como objetos), se le proporcionan esas dependencias a través de un constructor o un método setter. De esta manera, las dependencias de una clase pueden ser fácilmente intercambiadas o actualizadas sin necesidad de modificar el código de la clase.
Un ejemplo seria una clase A que depende de otra clase B, en lugar de crear una instancia de B dentro de A, se inyecta una instancia de B en A. Esto permite que la clase A sea menos acoplada y mas fácil de probar y mantener.
*/

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    //lo que hace 'createHttpOptions' es crear un objeto que se invocar cuando invoquemos una peticion http.
    //aqui enviaremos los headers por http de manera segura
    createHttpOptions(): HttpModuleOptions {
        return{
            //aqui crearemos un objeto tipo json
            //aqui construiremos nuestro header
            headers: {
                'Authorization': 'Bearer EAAM0j3bC0xABAEZC9gYZCBZBIxIdfrEkpFG6sB0A57KXPRzj2sMRbbg7pKVmo8pWqTnpYKsUWxF5gl76cFyKU80ebs7ZAxNDRuKPaBq69qGS9ZAZBmvV1KkpsqNI8MZBe9jk9OPjomkwMb3aGZASLB06FSyKFzGz2Sc0ZBiJTUtv5NkFkgpn1S46wCXTTC2h0m0YGbwgiZCVs8XgZDZD',
                'Content-Type': 'application/json' 
            }
        }
    }

}