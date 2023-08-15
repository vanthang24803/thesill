"use client"

const Touch = () => {
  return (
    <div className="lg:w-1/2 flex flex-col space-y-6">
      <span className="py-4 lg:text-7xl md:text-5xl text-4xl font-serif font-medium">
        Get in touch.
      </span>

      <p>
        Our team is full of passionate plant parents ready to help. For the
        fastest reply, live chat us Monday-Friday 9am-5pm EST or fill out this
        quick form anytime. We respond to each and every message as soon as
        possible; it may take 2-3 business days for us to get back to you via
        email. PS. We recommend adding
        <a href="/" className="text-[#009a7b] px-1 font-medium">
          info@thesill.com
        </a>
        to your contacts to ensure our responses land in your inbox.
      </p>

      <p>
        In the meantime, here is some information that may answer your question:
      </p>

      <div className="flex flex-col">
        <span className="font-serif font-medium">Order Status Update</span>
        <p>
          Orders with standard shipping ship within 2-6 business days. Orders
          with express shipping ship within 1-2 business days. Tracking
          information is automatically sent to your email. More details about
          shipping can be found
          <a href="/" className="text-[#009a7b] px-1 font-medium">
            here.
          </a>
        </p>
      </div>

      <div className="flex flex-col">
        <span className="font-serif font-medium">30-Day Guarantee</span>
        <p>
          We guarantee your plants will arrive in happy, healthy condition. If
          not, we replace them for free as part of our 30-Day Customer Happiness
          Guarantee. Learn more about our guarantee
          <a href="/" className="text-[#009a7b] px-1 font-medium">
            here.
          </a>
        </p>
      </div>

      <div className="flex flex-col">
        <span className="font-serif font-medium">
          Not sure what plant is best for you?
        </span>
        <p>
          Find your perfect match with our
          <a href="/" className="text-[#009a7b] px-1 font-medium">
           plant quiz!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Touch
