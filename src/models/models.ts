export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICart {
  item: IProduct;
  quantity: number;
  priceCurrentPosition: number;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface InitialItemsState {
  items: IProduct[];
  categories: Array<string>;
  slicedItems: IProduct[][];
  isLoading: boolean;
  initialized: boolean;
}

export interface InitialCartState {
  cart: ICart[];
  cartCounter: number;
  totalPrice: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IOrderResult {
  cart: ICart[];
  email: string;
  name: string;
  phone: string;
  totalPrice: number;
}

type MessageType = 'success' | 'error' | 'info' | 'warning';

export interface NotifyProps {
  message: string,
  type: MessageType,
  verticalPosition?: 'top' | 'bottom',
  horizontalPosition?: 'left' | 'right' | 'center'
}
