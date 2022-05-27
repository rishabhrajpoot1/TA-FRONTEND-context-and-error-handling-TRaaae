import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ModeContext from "../ModeContext";

function Main({ isDarkMode }) {
  return (
    <>
      <Title text="Text Component" isDarkMode={isDarkMode} />
      <Paragraph isDarkMode={isDarkMode} />
      <Title text="Card Component" isDarkMode={isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
    </>
  );
}

export default Main;
