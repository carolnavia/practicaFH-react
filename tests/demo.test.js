describe("Pruebas en <DemoComponent>", () => {
  test("Esta es una prueba que no debe fallar", () => {
    // 1. inicializacion

    const message1 = "Hola Mundo";

    // 2. estimulo

    const message2 = message1.trim();
    // 3. Observar el comportamiento esperado

    expect(message1).toBe(message2);
  });
});
