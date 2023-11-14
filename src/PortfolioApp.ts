import { SymplApp } from "sympl";
import { HomePage } from "./Views/HomePage";
import { Button } from "./Components/Button";

export class PortfolioApp extends SymplApp
{
    load(){
        this._defaultView = new HomePage(this, "HomePage", {type: 'div', id: 'home-page'})
        super.load();
    }
}