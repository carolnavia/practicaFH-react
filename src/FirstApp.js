import { PropTypes } from "prop-types";

/* const name = "Fernando";
const saludar = () => {
  return `Hola ${name}`;
}; */

const FirstApp = ({ title, name, subTitle }) => {
  return (
    <>
      <div data-testid="test-title">{title}</div>
      <p> {subTitle}</p>
      <p> {subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
FirstApp.defaultProps = {
  name: "Fernando Herrera",
  subTitle: "No hay Subtitle",
  // title: "No hay Titulo",
};

export default FirstApp;
