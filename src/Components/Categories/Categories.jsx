import { ProgressBar } from "react-loader-spinner";
import useAllCatrgories from "../../CustomHook/useAllCatrgories";

export default function Categories() {
  const { data, error, isLoading } = useAllCatrgories();

  if (isLoading) {
    return (
      <div className="h-screen bg-violet-800 flex flex-col justify-center items-center">
        <ProgressBar
          visible={true}
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-emerald-900 mt-4">
          Data Is Loading...
        </h2>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center"> Failed to load data</div>;
  }

  return (
    <div className="container py-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.data.data.map((categ) => (
          <div key={categ._id} className="rounded-xl bg-blue-200 p-3 shadow-md">
            <img src={categ.image} alt={categ.name} className="w-full h-40 object-cover rounded-lg" />
            <h5 className="text-center text-lg font-semibold mt-2">{categ.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
