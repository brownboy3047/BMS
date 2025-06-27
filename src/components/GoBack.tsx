import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <span
      className="text-sm px-1 font-semibold text-secondary cursor-pointer flex items-center gap-1 mb-2"
      onClick={() => navigate(-1)}
    >
      {/* &larr; Go Back */}
      <IoMdArrowRoundBack size={24} />
      <span> Go Back</span>
    </span>
  );
}
