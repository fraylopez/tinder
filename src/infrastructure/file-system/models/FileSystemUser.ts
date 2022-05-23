export interface FileSystemUser {
  id: string;
  swipes: {
    to: string;
    direction: boolean;
  }[];
}
