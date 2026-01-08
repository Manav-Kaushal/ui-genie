export interface MoodBoardImage {
  id: string;
  file?: File; // Optional for server-loaded images
  preview: string; // Local preview url or Convex url
  storageId?: string;
  uploaded: boolean;
  uploading: boolean;
  error?: string;
  url?: string; // Convex url for uploaded images
  isFromServer?: boolean; // Track if image came from server
}
