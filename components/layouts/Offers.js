import Link from "next/link";

export default function Offers() {
  return (
    <div className="flex justify-around items-center px-5 py-10">
      <Link href="/">
        <img src={"/promotion/offer-1.png"} alt="offers" width="30%"/>
      </Link>
      <Link href="/">
        <img src={"/promotion/offer-2.png"} alt="offers" width="30%"/>
      </Link>
      <Link href="/">
        <img src={"/promotion/offer-3.png"} alt="offers" width="30%"/>
      </Link>
    </div>
  );
}
