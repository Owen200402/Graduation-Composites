import { photoData } from './photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1938)
  .map((p) => p.path);
