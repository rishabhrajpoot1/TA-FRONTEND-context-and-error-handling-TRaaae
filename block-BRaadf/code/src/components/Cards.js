import Card from "./Card";
import ModeContext from "../ModeContext";

function Cards({ isDarkMode }) {
  return (
    <div className="cards_wrap">
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
    </div>
  );
}

export default Cards;
