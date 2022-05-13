import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { Swipe } from "../models/Swipe";
import { User } from "../models/User";

export class SwippingController {

    constructor(
        private user: User,
        private persistenceService?: FileSystemUserPersistenceService
    ) { }

    control(direction: boolean, candidate: Profile): void {
        this.user.swipe(new Swipe(direction, candidate));
        this.persistenceService.update(this.user.getId(), this.user.toPrimitives())
    }
}

type FileSystemUserPersistenceService = any;
//TODO!