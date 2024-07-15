import { photoData } from '../data/photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1969)
  .map((p) => p.path);
