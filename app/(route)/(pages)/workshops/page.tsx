import dynamic from "next/dynamic";

import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Body from "@/components/ui/body";

const data = [
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F541239079%2F218194620125%2F1%2Foriginal.20230622-182750?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C47%2C1024%2C512&s=6b86e9e314e80bce738950868752f8bb",
    title: "Propagation 101: In Person Workshop in Bethesda",
    time: "July 31st, 2023",
    subtitle:
      "Join The Sill for a free Propagation 101 Workshop in Bethesda ! Learn how to successfully propagate your plants using different methods.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F543127099%2F218194620125%2F1%2Foriginal.20230626-165441?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C295%2C1216%2C608&s=762cf109c870261518dd9e99ab5bb6af",
    title: "The Sill X Black Lab Cafe: Plants and Puppuccinos",
    time: "August 2nd, 2023",
    subtitle:
      "Join The Sill & Black Lab Cafe in UWS! Bring your pups to enjoy complimentary treats & puppuccinos and get a discount on your plant purchase",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526130859%2F218194620125%2F1%2Foriginal.20230531-144727?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=38%2C0%2C1428%2C714&s=0836250368ffc4a7bd986eb9c5183de9",
    title: "Happy Hour Sip n Shop: Cobble Hill",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our Cobble Hill, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526136499%2F218194620125%2F1%2Foriginal.20230531-145342?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=14%2C0%2C1856%2C928&s=d5c1c9aa4f0997258db89d444dad4066",
    title: "Happy Hour Sip n Shop: Park Slope",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our Park Slope, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526145699%2F218194620125%2F1%2Foriginal.20230531-150259?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C769%2C3000%2C1500&s=02cebe339f344371458759d63b3fc627",
    title: "Happy Hour Sip n Shop: UWS",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our UWS, NYC location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526156139%2F218194620125%2F1%2Foriginal.20230531-151217?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=51%2C0%2C1776%2C888&s=d29b12cdda4fa891e14a6a62d80e9771",
    title: "Happy Hour Sip n Shop: Williamsburg",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our Williamsburg, BK location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526177499%2F218194620125%2F1%2Foriginal.20230531-153311?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2048%2C1024&s=6398743c718213d0404ec898e9ac6b03",
    title: "Happy Hour Sip n Shop: Chicago",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our Chicago, IL location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526198979%2F218194620125%2F1%2Foriginal.20230531-155344?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=32%2C0%2C1816%2C908&s=44a9cea3cacd52d5e2454172b6bae1b8",
    title: "Happy Hour Sip n Shop: San Francisco",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our San Francisco, CA location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526161969%2F218194620125%2F1%2Foriginal.20230531-151741?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C504%2C1024%2C512&s=341560a3f1d4fd3d0bf3108e58078b01",
    title: "Happy Hour Sip n Shop: Bethesda",
    time: "August 5th, 2023",
    subtitle:
      "Join us at our Bethesda, MD location for a Happy Hour Sip & Shop! Enjoy complimentary drinks and 10% off The Sill plants and products.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F561246809%2F218194620125%2F1%2Foriginal.20230724-214523?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C604%2C1200%2C600&s=f1bc8f477133f62f95396001775f4085",
    title: "Air Plant 101: Plant Care Online Workshop",
    time: "August 11th, 2023",
    subtitle:
      "Join us for a free Air Plant Online Workshop! Learn all about these soilless epiphytes and best care practices to keep them healthy at home.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F559858939%2F218194620125%2F1%2Foriginal.20230721-200142?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=bc429ec019d8a1aa705039b26a995efe",
    title: "Plant Swap in Bethesda",
    time: "August 5th, 2023",
    subtitle:
      "Join The Sill for a Plant Swap in Bethesda! Bring a healthy plant or plant cutting to swap with other guests.",
    href: "/",
  },
  {
    imgUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F559852789%2F218194620125%2F1%2Foriginal.20230721-195033?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C2158%2C4552%2C2276&s=4974182f438d7bd6333f0c5c98cc322f",
    title: "Plant Swap in UWS",
    time: "August 5th, 2023",
    subtitle:
      "Join The Sill for a Plant Swap in UWS! Bring a healthy plant or plant cutting to swap with other guests.",
    href: "/",
  },
];


const WorkShops = async () => {
  const billboard = await getBillboard("4b48882f-da79-4587-ade9-37a5c8bc3529");
  const Card = dynamic(() => import("./components/card"));
  return (
    <>
      <Billboard
        main="Workshops"
        href="/"
        subtitle="All Events"
        link="/"
        data={billboard}
      />
      <Body>
        <Card />
      </Body>
    </>
  );
};

export default WorkShops;
