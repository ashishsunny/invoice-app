import React, { ReactNode } from 'react';
import Navbar from '@/components/navbar/navbar'

type LayoutProps = {
    children: ReactNode;
  };

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="h-[100%] w-[100%] bg-color1">
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
