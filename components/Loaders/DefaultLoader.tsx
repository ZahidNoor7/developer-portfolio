export default function DefaultLoader() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <span className="text-2xl text-[#16f2b3]">Loading...</span>
      <div className="loader-dots">
        <span
          className="inline-block w-3 h-3 mx-1 rounded-full bg-[#16f2b3] animate-bounce"
          style={{ animationDuration: "0.8s", animationDelay: "0s" }}
        ></span>
        <span
          className="inline-block w-3 h-3 mx-1 rounded-full bg-[#16f2b3] animate-bounce"
          style={{ animationDuration: "0.8s", animationDelay: "-0.2s" }}
        ></span>
        <span
          className="inline-block w-3 h-3 mx-1 rounded-full bg-[#16f2b3] animate-bounce"
          style={{ animationDuration: "0.8s", animationDelay: "-0.4s" }}
        ></span>
        <span
          className="inline-block w-3 h-3 mx-1 rounded-full bg-[#16f2b3] animate-bounce"
          style={{ animationDuration: "0.8s", animationDelay: "-0.6s" }}
        ></span>
      </div>
    </div>
  );
}
