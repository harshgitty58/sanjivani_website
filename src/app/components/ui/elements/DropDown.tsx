import React, { useState, useRef, useEffect } from 'react'

export type DropDownOptions = {
    label: string
    value: string
}

type DropDownProps = {
    options: DropDownOptions[]
    value: string;
    onChange?: (value: string) => void
    name?: string;
    className?: string;
    id?: string;
    showSelected?:boolean;
    showNormalDropDown?: boolean;
}

export default function DropDown({
    options,
    value,
    onChange,
    name,
    className = '',
    id,
    showSelected = true,

}: DropDownProps) {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (val: string) => {
        onChange && onChange(val)
        setOpen(false)
    }

    const selectedLabel = options.find(option => option.value === value)?.label || 'Select'

    return (
        <div
            ref={containerRef}
            className={`relative group cursor-pointer border border-gray-300 rounded-xl px-3 py-3 hover:bg-blue-100 transition-colors duration-200 parent-dropdown flex-1 basis-1/5 ${name === 'Select Package' ? 'basis-1/5' : 'basis-2/5'
                } ${className}`}
        >
            <div className="title-dropdown">
                {name && <p className="text-gray-500 text-xs">{name}</p>}
            </div>

            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="text-2xl w-full font-semibold rounded-md mt-1 text-gray-700 bg-transparent text-left flex justify-between items-center focus:outline-none transition-all duration-300"
            >
                {selectedLabel}
                <img
                    src="/icons/dropdownArrow.svg"
                    alt="Toggle Dropdown"
                    className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />

            </button>

            {open && (
                <ul
                    tabIndex={-1}
                    role="listbox"
                    aria-labelledby={id}
                    className="absolute  z-10 mt-1 w-full origin-top-right rounded-md bg-white shadow-lg focus:outline-none max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 transition-all duration-200"
                >

                    <li className='text-xs px-4 py-1 text-gray-400 border-b-1 border-gray-300'>{name}</li>

                    {options.map(option => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={option.value === value}
                            onClick={() => handleSelect(option.value)}
                            className={`cursor-pointer select-none px-4 py-2 text-xs text-gray-700 hover:bg-blue-100  ${option.value === value ? ' font-semibold text-blue-700' : ''
                                }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            {
                showSelected &&

                <div className="mt-2">
                    <p className="text-gray-400 text-xs">selected: {selectedLabel}</p>
                </div>
            }
        </div>
    )
}
