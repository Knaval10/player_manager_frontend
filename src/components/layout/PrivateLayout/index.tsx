import PrivateNav from "./PrivateNav";

const PrivateLayout = ({ children }: any) => {
  return (
    <div className="bg-[#081232] ">
      <div className="fixed right-0 z-20">
        <PrivateNav />
      </div>
      <div className="h-full w-full pt-[80px]">{children}</div>
    </div>
  );
};

export default PrivateLayout;
