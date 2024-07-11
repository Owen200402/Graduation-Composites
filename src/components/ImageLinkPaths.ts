import { photoData } from '../data/photoData';

export const ImageLinkPaths = photoData
  .filter((p) => p.year === 1961).slice(68)
  .map((p) => p.path);
