import { getHeroeByIdAsync } from "../../src/bases-pruebas/09-promesas";

describe("Pruebas funciones asincronas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });
  test("getHeroeByIdAsync debe tener un error si el heroe  no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((err) => {
      console.log(`No se pudo encontrar el héroe id ${id}`);
      done();
    });
  });
});
