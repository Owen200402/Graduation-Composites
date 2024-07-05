import { photoData } from '../data/photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1949).slice(40, 63)
  .map((p) => p.path);
