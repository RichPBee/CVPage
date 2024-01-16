import { SymplApp } from "sympl";
import { HomePage } from "./Views/Home";
import { homePageSettings } from "./Settings/Views/Home";

export class CVApp extends SymplApp
{
    load(): void {
        this.createViews();
        super.load();
    }

    protected createViews(): void
    {
        const homePage = new HomePage(this, 'HomePage', homePageSettings);
        this._defaultView = homePage;
    }
}