import { BaseView } from "sympl";
import { LeftBar } from "../Components/LeftBar";
import { RightBar } from "../Components/RightBar";
import { leftBarSettings } from "../Settings/Components/LeftBar";
import { rightBarSettings } from "../Settings/Components/RightBar";

export class HomePage extends BaseView
{
    protected createComponents(): void {
        const leftBar = new LeftBar(this, 'LeftBar', leftBarSettings);
        const rightBar = new RightBar(this, 'RightBar', rightBarSettings);
        console.log(this._viewContainer);  
    }
}