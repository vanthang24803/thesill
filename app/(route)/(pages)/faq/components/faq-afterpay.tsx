"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Afterpay = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-4xl font-serif font-medium py-6 border-b">
        Afterpay
      </span>

      <div className="flex flex-col space-y-2">
        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen1(!open1)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open1 && "text-[#009a7b] italic"
            }`}
          >
            What is AfterPay?
          </span>
          {open1 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open1 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Afterpay is a service that allows you to make purchases now and
              pay for them in four payments made every 2 weeks without any
              interest.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen2(!open2)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open2 && "text-[#009a7b] italic"
            }`}
          >
            How do I use Afterpay?
          </span>
          {open2 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open2 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Simply shop The Sill, add items to your cart and checkout as you
              normally would. At checkout choose, Afterpay as your payment
              method. If it’s your first time using Afterpay, you’ll need to
              register and provide payment details.
            </p>
            <p>
              If you’ve used Afterpay before, just log into your
              <a
                href="https://portal.afterpay.com/us/login-email"
                target="_blank"
                className="text-[#009a7b] px-1 font-medium"
              >
                Afterpay account
              </a>
              . Then complete your order—it’s that easy!
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen3(!open3)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open3 && "text-[#009a7b] italic"
            }`}
          >
            How do I know if an item is eligible for Afterpay?
          </span>
          {open3 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open3 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              All items that can be purchased using Afterpay will be marked with
              an Afterpay logo on the individual product page. This includes:
              live and faux plants, planters and accessories shown with the
              <i>Afterpay</i> logo.u!
            </p>

            <p>
              Items that cannot be purchased using Afterpay include: limited
              edition collections, products made by third party vendors,
              subscriptions, and gift cards.
            </p>

            <p>
              If you’d like to purchase these items, simply place a separate
              order!
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen4(!open4)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open4 && "text-[#009a7b] italic"
            }`}
          >
            How does the payment schedule work?
          </span>
          {open4 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open4 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Customers are required to make their first payment at the time of
              purchase, with the remaining three payments deducted every two
              weeks from your chosen payment method. If you choose to make
              additional payments before your scheduled pay dates, you may do so
              through your Afterpay account.
            </p>
            <p>
              You can log in to your Afterpay account to view your payment
              schedule and make a payment before the due date if you choose to
              do so.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}

        <div
          className="md:text-lg text-base hover:cursor-pointer flex items-center justify-between pb-2"
          onClick={() => setOpen5(!open5)}
        >
          <span
            className={`md:text-base text-sm font-medium ${
              open5 && "text-[#009a7b] italic"
            }`}
          >
            When will my items be delivered if I use Afterpay?
          </span>
          {open5 ? (
            <Minus className="text-[#009a7b]" size={26} />
          ) : (
            <Plus size={26} />
          )}
        </div>
        {open5 ? (
          <div className="border-b pb-4 flex flex-col space-y-3">
            <p>
              Afterpay orders are delivered under our standard shipping time
              frame, like any order placed on thesill.com.
            </p>

            <p>
              Visit our
              <a
                href="/shipping-and-handling"
                className="text-[#009a7b] px-1 font-medium"
              >
                shipping page
              </a>
              for more information.
            </p>
          </div>
        ) : (
          <div className="border-b"></div>
        )}
      </div>
    </div>
  );
};

export default Afterpay;
