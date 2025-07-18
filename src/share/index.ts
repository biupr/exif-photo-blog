import { Photo } from '@/photo';
import { PhotoSetAttributes, PhotoSetCategory } from '@/category';
import {
  absolutePathForCameraImage,
  absolutePathForFilmImage,
  absolutePathForFocalLengthImage,
  absolutePathForLensImage,
  absolutePathForPhotoImage,
  absolutePathForRecipeImage,
  absolutePathForTagImage,
  absolutePathForYearImage,
} from '@/app/path';

export type ShareModalProps = Omit<PhotoSetAttributes, 'photos'> & {
  photo?: Photo
  photos?: Photo[]
} & PhotoSetCategory;

export const getSharePathFromShareModalProps = ({
  photo,
  camera,
  lens,
  tag,
  recipe,
  film,
  focal,
  year,
}: ShareModalProps) => {
  if (photo) {
    return absolutePathForPhotoImage(photo);
  } else if (camera) {
    return absolutePathForCameraImage(camera);
  } else if (lens) {
    return absolutePathForLensImage(lens);
  } else if (tag) {
    return absolutePathForTagImage(tag);
  } else if (recipe) {
    return absolutePathForRecipeImage(recipe);
  } else if (film) {
    return absolutePathForFilmImage(film);
  } else if (focal) {
    return absolutePathForFocalLengthImage(focal);
  } else if (year) {
    return absolutePathForYearImage(year);
  }
};
