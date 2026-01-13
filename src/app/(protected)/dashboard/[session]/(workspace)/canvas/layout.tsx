import Toolbar from "./_components/toolbar";

type CanvasLayoutProps = {
  children: React.ReactNode;
};

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  return (
    <div className="w-full h-screen">
      {children}
      <Toolbar />
    </div>
  );
};

export default CanvasLayout;
