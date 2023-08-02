import { Light } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/lights`;

const getLights = async (): Promise<Light[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getLights;
