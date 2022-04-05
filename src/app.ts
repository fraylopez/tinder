import { GetUserProfileView } from "./views/user-view/GetUserProfileView";

export class Tinder {
    private getUserProfileView: GetUserProfileView;

    constructor() {
        this.getUserProfileView = new GetUserProfileView();
    }

    public render(): void {
        this.getUserProfileView.render();
    }
}

new Tinder().render();