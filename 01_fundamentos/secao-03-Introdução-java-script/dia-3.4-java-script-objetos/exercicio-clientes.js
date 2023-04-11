// Pedido de clientes

// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },

    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

function customerInfo(order) {
    return 'Olá ' 
    + order.order.delivery.deliveryPerson + ', entrega para: ' 
    + order.name + ', Telefone: ' 
    + order.phoneNumber + ', R. ' 
    + order.address.street + ', Nº: ' 
    + order.address.number + ', AP: ' 
    + order.address.apartment;
};

console.log(customerInfo(order));


// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';

function orderModifier(order) {
    let novoNome = order.name = 'Carolina'; // Altera o nome da pessoa compradora
    let novoTotal = order.payment.total = '50'; // Altera o valor total da compra
    let pizzas = Object.keys(order.order.pizza); // Recupera as chaves que estão em `order.order.pizza`
    let drinks = order.order.drinks.coke.type; // Recupera o `type` da chave `coke`.

    return 'Olá ' + novoNome + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + novoTotal + ',00.'

};

console.log(orderModifier(order));
