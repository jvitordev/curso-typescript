import "reflect-metadata";

function decoratorParametros(
    target: any,
    key: string,
    propertyKey: number
) {
    return Reflect.getMetadata("design:paramtypes", target, key)
        .map((item: any) => console.log(
            "Em '" 
            + key 
            + "', o parâmetro '" 
            + target[key].toString().split('(')[1].split(')')[0] 
            + "' é do tipo:" 
            + " " 
            + item.name
        ));
}

class TratarParametros {
    
    metodo1(@decoratorParametros mensagem: string) { }

    metodo2(@decoratorParametros numero: number) { }

}

new TratarParametros();


/**
 * * Explicação do códido dada pelo ChatGPT
 * 
 * Esse código importa a biblioteca 'reflect-metadata', que fornece informações sobre os tipos de um código.
 * Em seguida, é criada uma função decorator 'decoratorParametros', que recebe como parâmetros o elemento de código em que é 
 * aplicado, no caso os métodos 'metodo1' e 'metodo2', e o índice do parâmetro do método em que o decorator foi aplicado.
 * O decorator usa o Reflect API para obter os tipos dos parâmetros dos métodos 'metodo1' e 'metodo2', e imprime essas 
 * informações no console. Por fim, a classe 'TratarParametros' é criada, e o decorator 'decoratorParametros' é aplicado 
 * nos métodos 'metodo1' e 'metodo2', que possuem os parâmetros 'mensagem' e 'numero' do tipo 'string' e 'number', respectivamente.
 * Ao instanciar a classe 'TratarParametros', esses métodos são chamados, mas não possuem nenhum corpo, o que significa que 
 * eles não realizam nenhuma ação além de imprimir os tipos dos parâmetros no console.
*/