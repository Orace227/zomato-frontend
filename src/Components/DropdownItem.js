import React, { useContext } from 'react'
import { Menu } from '@headlessui/react'
import { DropdownItemContext } from '../contexts/DropdownItemContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownItem(props) {
    const { setTitle, setlanguage } = useContext(DropdownItemContext)

    return (
        <>
            <Menu as="div" className="relative w-[160px] inline-block text-left">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            onClick={() => props.language ? setlanguage(props.language) : setTitle(props.title)}
                            to="/"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm cursor-pointer'
                            )}
                        >
                            {props.title}
                            {props.language}
                        </a>
                    )}
                </Menu.Item>
            </Menu >
        </>
    )
}
