import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { Swipe } from "../models/Swipe";
import { User } from "../models/User";

export class SwippingController {

    constructor(
        private profile: User,
        private persistenceService?: FileSystemUserPersistenceService
    ) { }

    control(direction: boolean, candidate: Profile): void {
        this.profile.swipe(new Swipe(direction, candidate));
        this.persistenceService.update(this.profile.getId(), this.profile.toPrimitives())
    }
}

type FileSystemUserPersistenceService = any;
//TODO!