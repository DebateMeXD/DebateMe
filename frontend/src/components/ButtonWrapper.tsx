export default function ButtonWrapper({ children }: { children: any }) {
  return (
    <div className="mt-4 px-4 py-2 bg-[#685885] text-[#ECE8F0] rounded-lg  shadow-lg/30 hover:cursor-pointer">
      {children}
    </div>
  );
}
