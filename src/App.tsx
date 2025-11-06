import List from "./components/list/list";
import { menu } from "./data/menu";
import "./App.css";
import "./components/card/card.css";

function App() {
    return (
        <div>
            <h1>Johannes Menu</h1>
            <h3>HovedRett</h3>
            <div className="menuContainer">
                {menu
                    .filter((item) => item.category === "Hovedrett")
                    .map((menuItem) => (
                        <List key={menuItem.id} {...menuItem} />
                    ))}
            </div>

            <h3>Forrett</h3>
            <div className="menuContainer">
                {menu
                    .filter((item) => item.category === "Forrett")
                    .map((menuItem) => (
                        <List key={menuItem.id} {...menuItem} />
                    ))}
            </div>
            <h3>Dessert</h3>
            <div className="menuContainer">
                {menu
                    .filter((item) => item.category === "Dessert")
                    .map((menuItem) => (
                        <List key={menuItem.id} {...menuItem} />
                    ))}
            </div>
        </div>
    );
}

export default App;
