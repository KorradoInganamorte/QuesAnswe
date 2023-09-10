"use client";

// lists(array), list(string), image(boolean), min-w(number)

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface IDropdown {
    lists: [],
    list: string,
    image: boolean,
    min_width: number
}

function Dropdown() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropdownList = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number>(0)

  const [list, setList] = useState<string>("Вопросы");

  function dropdownVisibleToggle() {
    setDropdown(!dropdown);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownList.current &&
      !dropdownList.current.contains(e.target as Node)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const lists = [
    { name: "Опросы", id: "1" },
    { name: "Викторины", id: "2" },
    { name: "Вопросы", id: "3" },
    { name: "Все", id: "4" },
  ];

  function pickList(e: React.MouseEvent<HTMLDivElement>, index:number) {
    const LiElement = e.target as HTMLDivElement;
    setList(LiElement.innerHTML);

    setActive(index)
    setDropdown(false);
  }

  return (
      <div className="flex flex-col min-w-[16.5rem] relative py-[1rem] px-[1rem] bg-white rounded-[5px] border border-black cursor-pointer" onClick={dropdownVisibleToggle}>
        <div className="flex items-center justify-between">
          <p className="text-neutral-500 text-lg font-medium">{list}</p>
          <Image
            width={16}
            height={0}
            src="/arrow_dropdown.svg"
            alt="arrow dropdown"
          ></Image>
        </div>
        {dropdown && (
          <div
            className="absolute z-[2] min-w-[180px] bg-white rounded-[.5rem] top-[4.5rem] left-[-.1rem] drop-shadow-lg"
            ref={dropdownList}
          >
            {lists.map((list, index) => (
              <div
                onClick={(e) => pickList(e, index)}
                key={list.id}
                className={index === active ? "bg-indigo-400 text-white text-lg font-medium px-[1.5rem] py-[.5rem] rounded-[.5rem]" : "hover:bg-slate-100 text-black text-lg font-medium px-[1.5rem] py-[.5rem] rounded-[.5rem]"}
              >
                {list.name}
              </div>
            ))}
          </div>
        )}
      </div>
  );
}

export default Dropdown;
