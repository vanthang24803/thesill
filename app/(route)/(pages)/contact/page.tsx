"use client";

import Body from "@/components/ui/body";
import Touch from "./components/touch";
import Form from "./components/form";

const Contact = () => {
  return (
    <Body>
      <div className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-6 py-8">
        <Touch />
        <Form />
      </div>
    </Body>
  );
};

export default Contact;
