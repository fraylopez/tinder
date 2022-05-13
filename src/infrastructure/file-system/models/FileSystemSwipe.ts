import { FileSystemProfile } from "./FileSystemProfile";

export interface FileSystemSwipe {
  owner: FileSystemProfile;
  candidate: FileSystemProfile;
  isRight: boolean;
}
