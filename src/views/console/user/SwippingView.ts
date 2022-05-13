import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";

export class SwippingView extends ConsoleView {
    constructor(private controller: SwippingController) {
        super();
    }
    render(candidate: Profile) {

        let like: boolean = this.console.yesNoDialog("righ or left");
        this.controller.control(like, candidate)


    }
}