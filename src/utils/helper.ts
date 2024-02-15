import { ICart, IProduct } from "../models/models";

export function sliceItems(arr: IProduct[]): IProduct[][] {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 6);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] =  [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as IProduct[][]);
}

export function cartCounter(state: ICart[]): number {
  return state.reduce((acc, current) => {
    return acc + current.quantity
  }, 0);
}

export function sumOfOnePosition(item: ICart): number {
  let res = item.item.price * item.quantity;
  return Number(res.toFixed(2));
}

export function getTotalPrice(cart: ICart[]): number {
  let total = cart.reduce((total: number , item: ICart) => {
    return total + item.priceCurrentPosition;
  }, 0);

  const roundedTotal = total.toFixed(2);
  return parseFloat(roundedTotal);
}
