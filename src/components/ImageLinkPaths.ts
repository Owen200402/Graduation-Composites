import { photoData } from './photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1946)
  .map((p) => p.path);
