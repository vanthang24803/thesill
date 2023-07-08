"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl py-3 lg:px-0 md:px-8 px-3">
      {children}
    </div>
  );
};

export default Container;
