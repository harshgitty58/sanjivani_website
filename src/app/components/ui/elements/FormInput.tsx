import { ArrowRightIcon, EnvelopeIcon, LockClosedIcon, MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { JSX } from 'react';

export type FormInputProps = {
    label?: string;
    type: string;
    icon?: string;
    placeholder?: string;
    helperText?: string;
    labelStyle?: string;
    inputStyle?: string;
    onChange?: (value:string)=>void;
    value?:string;
}

export default function FormInput({ label, type, placeholder, helperText, icon, labelStyle, inputStyle, onChange, value }: FormInputProps) {

    const iconMap: { [key: string]: JSX.Element } = {
        arrow: <ArrowRightIcon className='h-4 w-4 text-gray-600' />,
        email: <EnvelopeIcon className='h-4 w-4 text-gray-600' />,
        password: <LockClosedIcon className='h-4 w-4 text-gray-600' />,
        phone: <PhoneIcon className='h-4 w-4 text-gray-600' />,
        location: <MapPinIcon className='h-4 w-4 text-gray-600' />,
        user: <UserIcon className='h-4 w-4 text-gray-600' />,
    };

    const iconElement = icon ? iconMap[icon] : null;

    return (
        <div className='flex flex-col mt-3 w-full relative'>
            <label className={`text-sm font-medium text-gray-500 mb-1 ${labelStyle}`}>{label}</label>

            <div className="relative">
                {iconElement && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {iconElement}
                    </div>
                )}

                <input
                    value={value}
                    onChange={e => onChange && onChange(e.target.value)}
                    type={type}
                    placeholder={placeholder ? placeholder: 'Enter '+label}
                    className={`text-gray-700 border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition duration-300 ease-in-out ${inputStyle}`}
                    // required
                />
            </div>

            {helperText && <p className='text-xs text-gray-500 mt-1'>{helperText}</p>}
        </div>
    );
}
