import type { MenuProps } from "../../types/types";
import Card from "../card/card";
import "./list.css";

export default function List(menu: MenuProps) {
    return (
        <div className="list">
            <h2>{menu.title}</h2>
            <Card {...menu} />
        </div>
    );
}
