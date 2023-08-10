import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropdownItem from "./DropdownItem";
import { DropdownItemContext } from "../contexts/DropdownItemContext";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
export default function Dropdown(props) {
  const { Title, language } = useContext(DropdownItemContext);
  return (
    <>
      <Menu
        as="div"
        className={`md:absolute right-44 border ml-3 rounded-md inline-block text-left ${
          props.number1 == 24 ? "" : "hidden"
        }`}
      >
        <div>
          <Menu.Button className="w-[170px] inline-flex justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {Title}
            <ChevronDownIcon
              className="relative top-[1px] h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" w-[170px] right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className={`py-1 flex flex-col`}>
              <DropdownItem title="India" />
              <DropdownItem title="Austrelia" />
              <DropdownItem title="Brazil" />
              <DropdownItem title="Canada" />
              <DropdownItem title="Chile" />
              <DropdownItem title="Indonesia" />
              <DropdownItem title="Ireland" />
              <DropdownItem title="Italy" />
              <DropdownItem title="Lebanon" />
              <DropdownItem title="Malaysia" />
              <DropdownItem title="New Zealand" />
              <DropdownItem title="Philippines" />
              <DropdownItem title="Poland" />
              <DropdownItem title="Portugal" />
              <DropdownItem title="Qatar" />
              <DropdownItem title="Singapore" />
              <DropdownItem title="Slovakia" />
              <DropdownItem title="South Africa" />
              <DropdownItem title="Sri Lanka" />
              <DropdownItem title="Qatar" />
              <DropdownItem title="Turkey" />
              <DropdownItem title="UAE" />
              <DropdownItem title="United Kingdom" />
              <DropdownItem title="USA" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Dropdown of Languages */}

      <Menu
        as="div"
        className={`md:absolute md:right-16 inline-block border rounded-md  text-left ${
          props.number2 == 12 ? "" : "hidden"
        }`}
      >
        <div>
          <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {language}
            <ChevronDownIcon
              className="relative top-[1px] h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="md:absolute right-0 z-50 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg   ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className={`py-1 flex flex-col`}>
              <DropdownItem language="English" />
              <DropdownItem language="हिंदी" />
              <DropdownItem language="Türkçe" />
              <DropdownItem language="Português (BR)" />
              <DropdownItem language="Indonesian" />
              <DropdownItem language="Português (PT)" />
              <DropdownItem language="Español" />
              <DropdownItem language="Čeština" />
              <DropdownItem language="Slovenčina" />
              <DropdownItem language="Polish" />
              <DropdownItem language="Italian" />
              <DropdownItem language="Vietnamese" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
