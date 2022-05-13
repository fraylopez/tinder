import { StartSwippingController } from "../../../controllers/StartSwippingController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";
import { SwippingView } from "./SwippingView";

export class StartSwippingView extends ConsoleView {

    constructor(
        private view: SwippingView,
        private controller: StartSwippingController,
    ) {
        super()
    }

    public render(): void {
        this.console.writeInln("START SWIPPING");
        let candidates: Profile[] = this.controller.control()
        do {
            this.view.render(candidates.pop())
        } while (candidates);
    }
}
