import { IProduct } from '../../models/models';
import classes from './ImageWrapper.module.css'

interface IPhotoItem extends IProduct {
  style: React.CSSProperties
}

export default function ImageWrapper(item: IPhotoItem) {
  return (
    <div
      className={classes.imageWrapper}
      style={{ backgroundImage: `url(${item?.image})`, ...item.style}}
    ></div>
  );
}
