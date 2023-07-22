import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Plus, Minus } from "lucide-react";

interface CartItemProps {
  quantity: number;
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item, quantity }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(item.id);
  };
  const price = Number(item.price) * quantity;
  const priceSale = (
    (Number(item.price) - Number(item.price) * Number(item.sale) / 100) *
    quantity
  ).toFixed(2);

  const handleIncrement = (id: string) => {
    const currentItems = cart.items;
    const existingItem = currentItems.find((item) => item.product.id === id);

    if (existingItem) {
      cart.updateItemQuantity(id, existingItem.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const currentItems = cart.items;
    const existingItem = currentItems.find((item) => item.product.id === id);

    if (existingItem && existingItem.quantity > 1) {
      cart.updateItemQuantity(id, existingItem.quantity - 1);
    }
  };

  return (
    <div className="flex space-x-4 items-center" key={item.id}>
      <img
        src={item.images[0].url}
        alt="product"
        className="w-32 h-40 object-cover"
      />
      <div className="flex flex-col space-y-3">
        <p className="font-semibold md:text-xl">{item.name}</p>
        <p className="text-neutral-500 italic md:text-sm text-[12px]">
          {item.size.name} / {item.category.name} / {item.color.name}
        </p>
        <div className="flex space-x-4 items-center">
          {item.sale == "1" ? (
            <p className="font-medium text-xl">${price}</p>
          ) : (
            <p className="font-medium text-xl">${priceSale}</p>
          )}
          <p className="text-[#009a7b] text-sm">Ships Free</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="w-4 h-4 border-neutral-500 rounded-full border flex items-center justify-center"
              onClick={() => handleDecrement(item.id)}
            >
              <Minus size={12} />
            </div>
            <span className="text-lg">{quantity}</span>
            <div
              className="w-4 h-4 border-neutral-500 rounded-full border flex items-center justify-center"
              onClick={() => handleIncrement(item.id)}
            >
              <Plus size={12} />
            </div>
          </div>
          <span
            className="text-sm italic underline text-neutral-500"
            onClick={onRemove}
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
