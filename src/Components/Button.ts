import { BaseComponent } from "sympl";
import { IBaseSettings, IView } from "sympl/types/Definitions/Definitions";
import { ButtonSettings } from "../Settings/Components/Button";

export class Button extends BaseComponent
{
    constructor(parent: IView, id: string, settings: IBaseSettings, onClick: Function)
    {
        super(parent, id, settings);
        this.getElement().addEventListener('click', () => {
            console.log(onClick);
            onClick();
        });
    }
}