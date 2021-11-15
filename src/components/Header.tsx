import React from 'react';
import {AiOutlineMenu} from "react-icons/all";

export default function Header() {
    return (
        <div className="flex bg-white h-12">
            <button className="bg-black h-12 w-12 flex justify-center items-center">
                <AiOutlineMenu color="white" size="24"/>
            </button>
            <div className="flex-1 flex justify-center items-center text-black text-base font-bold">
                Альманах практик будущего
            </div>
        </div>
    )
}
