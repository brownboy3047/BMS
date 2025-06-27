import React from "react";

interface Props {
  setShowSidebar: (show: boolean) => void;
}

const Overlay: React.FC<Props> = ({ setShowSidebar }) => {
  return (
    <div
      className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
      onClick={() => setShowSidebar(false)}
    />
  );
};

export default Overlay;
