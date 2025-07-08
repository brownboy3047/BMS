import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center max-w-lg m-auto mt-52">
      <div className="text-center">
        <p className="my-4 text-4xl">Page Not Found</p>
        <p className="my-4 text-lg">
          Sorry, it seems that the page you are looking for does not exist. Feel
          free to use our navigation menu or the button below to explore more
        </p>

        <button
          onClick={() => navigate("/")}
          className="py-2 px-3 bg-secondary text-white"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
