import useCart from "@/hooks/use-cart";
import Modal from "@/components/ui/modal-sm";
import Button from "@/components/ui/button";
import CartItem from "./cart-item";
import Sumary from "./sumary";

const Cart = () => {
  const cart = useCart();
  return (
    <Modal isOpen={cart.isOpen} onClose={cart.onClose}>
      <div className="flex items-end space-x-2">
        <span className="md:text-3xl text-xl font-medium">Your Cart</span>
        <p className="text-neutral-500 md:text-xl text-lg">
          ({cart.items.length})
        </p>
      </div>
      {cart.items.length === 0 ? (
        <>
          <div className="mt-4 md:h-[58vh] h-[64vh] border-b-[2px] border-neutral-400">
            <p>Your cart is empty</p>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center justify-between">
              <p className="md:text-3xl text-xl font-medium">Subtotal: </p>
              <p className="md:text-xl text-lg">0,00 US$</p>
            </div>
            <div className="flex items-center justify-between pb-4">
              <p className="md:text-2xl text-xl">Shipping: </p>
              <p className="md:text-xl text-lg">Free</p>
            </div>
            <Button disabled className="italic text-neutral-500">
              Your Cart Is Empty
            </Button>
            <p className="italic text-neutral-500 text-sm">
              Taxes calculated at checkout.
            </p>
          </div>
        </>
      ) : (
        <div className="">
          <p className="py-4 border-b text-[15px] border-neutral-300 font-medium">
            Our team preps, prunes, & packs every order—lots of care goes into
            every step.
          </p>
          <div className="flex my-6 flex-col space-y-3 hover:cursor-pointer overflow-auto lg:h-[45vh] md:h-[50vh] h-[55vh] no-scrollbar">
            {cart.items.map((item) => (
              <CartItem
                item={item.product}
                key={item.product.id}
                quantity={item.quantity}
              />
            ))}
          </div>
          <Sumary />
        </div>
      )}
    </Modal>
  );
};

export default Cart;
