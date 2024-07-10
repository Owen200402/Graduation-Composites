import { photoData } from '../data/photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1960).slice(53)
  .map((p) => p.path);
