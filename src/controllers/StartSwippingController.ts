import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
export class StartSwippingController {

    constructor(
        private persistenceService: FileSystemProfilePersistenceService,
    ) {
    }

    public control(): Profile[] {
        return this.persistenceService.getProfiles();
    }
}