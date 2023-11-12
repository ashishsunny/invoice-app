import Navbar from "@/components/navbar/navbar";
import { NextPage } from "next";
import { ReactNode } from "react";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: NextPage<LayoutMainProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutMain;
