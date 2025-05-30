import { FaCross } from "react-icons/fa";

export default function LectioLoading() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f5ef] px-4 py-8 text-gray-500 animate-pulse">
      <FaCross size={50} />
    </div>
  );
}
