import Link from "next/link";

export default function AdminDetails() {
  return (
    <div className="border text-center rounded-md min-w-[250px]">
      <div className="p-6">
        <h1 className="text-5xl font-bold">200</h1>
        <h3 className="text-xl ">Users</h3>
      </div>
      <Link href="/">
        <div className="w-full p-5 border-t text-green-600 cursor-pointer font-bold">Show More 	&#8594;</div>
      </Link>
    </div>
  );
}
