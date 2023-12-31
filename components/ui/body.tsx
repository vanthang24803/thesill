"use client";

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <div className="mx-auto lg:mx-8 p-4">{children}</div>;
};

export default Body;
