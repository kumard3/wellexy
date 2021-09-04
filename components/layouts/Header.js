import HeaderSearch from "../search/header";

export default function Header() {
  return (
    <div className="flex justify-center items-center header">
      <div>
        <div className="text-center">
          <h1 className="h1">Your Medication, Delivered</h1>
          <h4 className="text-gray-400 text-xl my-4">
            Say goodbye to all your healthcare worries with us
          </h4>
        </div>
      </div>
    </div>
  );
}
