import { useState } from "react";
import { INavMenu } from "../utils/interfaces";
import { Menus } from "../utils/constants";



export default function NavMenu({activeMenuItem, setActiveMenuItem}: INavMenu){
    const handleMenuItemClick = (menuItem:any) => {
      setActiveMenuItem(menuItem);
    };
    
    return(
        <div className="flex flex-col w-48 border-l border-gray-200">   
            <ul className="text-[14px]">
                {Menus.map((menu, idx) => (
                <li
                    key={idx}
                    className={`py-3 px-3 cursor-pointer ${
                    activeMenuItem === menu.value ? 'text-blue-600 border-l-2 border-blue-600 -ml-[0.1rem]' : 'text-gray-500'
                    }`}
                    onClick={() => handleMenuItemClick(menu.value)}
                >
                    {menu.label}
                </li>
                ))}
            </ul>
        </div>
    )
}
