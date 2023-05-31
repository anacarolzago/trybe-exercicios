// Cenário de sucesso:
// Deve retornar os dados quando passamos um cep válido
// Deve aceitar ceps com ou sem item

import getAddressFromCep from "./getAddressFromCep";

// Cenário de erro:
// Lança erro quando recebe um cep vazio
// Lança erro quando recebe um cep inválido

describe("Quando a requisição é bem sucedida, ela retorna os dados esperado", () => {
    test("Deve retornar os dados quando passamos um cep válido", async () => {
        const address = await getAddressFromCep("03976100");

        expect(address.cep).toBe("03976-100");
        expect(address.logradouro).toBe("Rua Severino Suzano");
        expect(address.bairro).toBe("Jardim Sapopemba");
        expect(address.ud).toBe("SP");
    });
    test("Deve aceitar ceps com ou sem item", async () => {
        const firstAddress = await getAddressFromCep("03976100");
        expect(firstAddress.cep).toBe("03976-100");

        const secondAddress = await getAddressFromCep("03976-100");
        expect(secondAddress.cep).toBe("03976-100");
    });
});
