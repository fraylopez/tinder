import { GetProfileController } from "../../controllers/GetProfileController";

export class GetUserProfileView {
    private controller : GetProfileController ;
    constructor() {
    }

    public render(): void {
        console.log("What's your name?");
        const name = (<any>process.stdin).read();
        const profile = this.controller.control(name);
        console.log(`Name: ${profile.getName()}`);
    }
}