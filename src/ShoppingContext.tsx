import React, { useMemo, useState } from 'react';

export const ShoppingContext = React.createContext<IShoppingContext | null>(null);

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ShoppingProvider({ children }: React.PropsWithChildren) {
  const [items, setItems] = useState<IShoppingContext['items']>([]);
  const totalAmount = useMemo(
    () => items.reduce((prev, curr) => (prev += curr.amount), 0),
    [items],
  );

  const appendItem = (item: IMerchant, amount: number) => {
    const targetIndex = items.findIndex((each) => each.id === item.id);

    if (targetIndex === -1) {
      setItems([...items, { ...item, amount }]);
    } else {
      setItems((prev) => {
        prev[targetIndex].amount += amount;
        return [...prev];
      });
    }
  };

  const removeItem = (id: number) => {
    const targetIndex = items.findIndex((each) => each.id === id);
    console.log(items[targetIndex].amount);

    setItems((prev) => {
      if (prev[targetIndex].amount > 1) {
        prev[targetIndex].amount -= 1;
      } else {
        prev.splice(targetIndex, 1);
      }

      return [...prev];
    });
  };

  return (
    <ShoppingContext.Provider value={{ items, totalAmount, appendItem, removeItem }}>
      {children}
    </ShoppingContext.Provider>
  );
}
