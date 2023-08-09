import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Sumary = () => {
  const router = useRouter();
  const cart = useCart();
  const searchParams: any = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

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

  const onCheckOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/checkouts");
    cart.onClose();
  };

  return (
    <div className="flex flex-col space-y-2 mt-4">
      <div className="flex items-center justify-between">
        <p className="md:text-2xl text-xl font-medium">Subtotal: </p>
        <p className="md:text-xl text-lg font-medium">
          {totalPrice.toFixed(2)} US$
        </p>
      </div>
      <div className="flex items-center justify-between pb-4">
        <p className="md:text-2xl text-xl">Shipping: </p>
        <p className="md:text-xl text-lg">Free</p>
      </div>
      <Button onClick={onCheckOut}>Checkout</Button>
      <p className="italic text-neutral-500 text-sm">
        Taxes calculated at checkout.
      </p>
    </div>
  );
};

export default Sumary;
