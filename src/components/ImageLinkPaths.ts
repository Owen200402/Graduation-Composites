import { photoData } from '../data/photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1955)
  .map((p) => p.path);
