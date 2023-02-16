interface IMerchant {
  id: number;
  company: string;
  title: string;
  desc: string;
  final: number;
  discount: number;
  origin: number;
  thumbnail: string;
}

type TBasketItem = IMerchant & { amount: number };

interface IShoppingContext {
  items: TBasketItem[];
  totalAmount: number;
  appendItem: (item: IMerchant, amount: number) => void;
  removeItem: (id: number) => void;
}
