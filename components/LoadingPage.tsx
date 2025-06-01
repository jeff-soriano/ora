import LoadingIcon from "./LoadingIcon";

export default function LoadingPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f8f5ef] flex flex-col items-center justify-center px-4 py-8 ">
      <LoadingIcon />
    </div>
  );
}
