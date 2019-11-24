import { render } from "./index";
import Card from "./Card";

const CardList = cards => {
  const html = `
      ${cards.map(card => Card(card)).join("")}
  `;
  render(html, document.getElementById("root"));
};

export default CardList;
