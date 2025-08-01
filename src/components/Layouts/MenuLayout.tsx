import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../UI/Icon";
import type { MenuProps } from "../../../../lendsqr-assessmentt/src/utils/customerMenu";

interface MenuLayoutProps {
  menuItems: MenuProps[];
  Title:string;
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ menuItems , Title}) => {
  const location = useLocation();

  return (
    <div className="w-full space-y-2.5 mt-5 mb-10">
      <h4 className="text-color text-medium px-[30px] uppercase">{Title}</h4>
      <div className="flex flex-col w-full">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <Link
              to={item.link}
              key={item.link}
              className={`flex gap-2.5 items-center px-[30px] py-2.5 hover:bg-[#39CDCC10] ${
                isActive ? "bg-[#39CDCC20] border-l-[3px] border-[#39CDCC]" : ""
              }`}
            >
              <Icon assetName={item.icon} />
              <p className={isActive ? "" : "opacity-60"}>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLayout;