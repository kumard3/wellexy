import Link from "next/link";
import AdminDetails from "../cards/adminDetails";

function Body() {
  const linkStyle =
    "text-custom-text-gray flex items-center p-4 duration-200 justify-start  dark:from-gray-700 dark:to-gray-800  hover:bg-green-600 cursor-pointer hover:text-white font-medium w-[200px] my-1 hover:bg-gray-100";

  return (
    <div className="flex border-t">
      <div className="w-min hidden sm:flex bg-white  flex-col justify-between border-r border-gray-200">
        <div className="bg-white  dark:bg-gray-700 ">
          <nav className="">
            <div className="flex flex-col items-center justify-center ">
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Cold and Flu</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">First Aid</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Pain Relief</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Quit smoking</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Herbal products</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Suplements</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Baby care</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Suplements</span>
                </div>
              </Link>
              <Link href="/dashboard">
                <div className={`${linkStyle}`}>
                  <span className="mx-4 text-md">Baby care</span>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div>products goes here
        <AdminDetails/>
      </div>
    </div>
  );
}

export default Body;
