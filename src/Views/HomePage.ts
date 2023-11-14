import { BaseView } from "sympl";
import { Button } from "../Components/Button";
import { ButtonSettings } from "../Settings/Components/Button";

export class HomePage extends BaseView
{
    onOpen(): void {
        super.onOpen();
        this.createElements();
    }

    public createElements()
    {
        const btn = new Button(this, 'button', ButtonSettings, this.logClick);
    }

    protected logClick()
    {
        console.log('buttons are working');
    }
};