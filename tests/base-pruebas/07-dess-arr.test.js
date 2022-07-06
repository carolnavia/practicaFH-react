import { retornaArreglo } from "../../src/bases-pruebas/07-deses-arr";

describe("Pruebas 07-desectructurar Arreglos", () => {
  test("debe de retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toEqual("ABC");
    expect(numbers).toEqual(123);

    expect(typeof letters).toEqual("string");
    expect(typeof numbers).toEqual("number");
  });
});
