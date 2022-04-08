import { Profile } from "../models/Profile";
import * as fs from 'fs';

export class CreateProfileController {
    public control(name: string, age: number): void {
        const profile = new Profile(name, age);
        fs.writeFileSync('./src/data/profiles.json', JSON.stringify(profile));
    }
}