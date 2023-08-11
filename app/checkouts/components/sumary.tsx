import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCart from "@/hooks/use-cart";


const Sumary = () => {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    if (item.product.sale == "1") {
      return total + Number(item.product.price) * Number(item.quantity);
    } else {
      return (
        total +
        (Number(item.product.price) -
          (Number(item.product.price) * Number(item.product.sale)) / 100) *
          item.quantity
      );
    }
  }, 0);

  return (
    <div className="flex flex-col space-y-8 pt-4 border-t">
      <div className="flex items-center justify-between space-x-3 ">
        <Input
          placeholder="Gift card or discount code"
          className="rounded-md h-12"
        />
        <Button disabled className="w-1/4 h-12 rounded-md">
          Apply
        </Button>
      </div>
      <div className="flex flex-col space-y-2 border-t py-4">
        <div className="flex items-center justify-between">
          <p>Subtotal: </p>
          <p className="text-lg font-medium">{totalPrice.toFixed(2)} US$</p>
        </div>
        <div className="flex items-center justify-between pb-4 text-sm">
          <p>Shipping: </p>
          <p>Calculated at next step</p>
        </div>
      </div>
      <div className="pt-4 border-t flex items-center justify-between">
        <p>Total</p>
        <p className="text-2xl font-medium">{totalPrice.toFixed(2)} US$</p>
      </div>
    </div>
  );
};

export default Sumary;
