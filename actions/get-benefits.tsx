import { Benefit } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/benefits`;

const getBenefits = async (): Promise<Benefit[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getBenefits;
