const nombre = "Franco";
const saludar = () => {
  return `Hola ${nombre}`;
};

const FirstApp = ({ titulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <p> {saludar()}</p>
    </>
  );
};

export default FirstApp;
