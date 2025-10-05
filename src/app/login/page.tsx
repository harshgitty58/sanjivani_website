"use client"

import React from 'react'
import FormInput from '../components/ui/elements/FormInput';
import DropDown, { DropDownOptions } from '../components/ui/elements/DropDown';
import Link from 'next/link';
import { login, LoginRequest } from '@/services/auth';
import { registerVendor, RegisterVendorReq } from '@/services/vendor/registerVendor';
import { registerCorporate, RegisterCorporateReq } from '@/services/corporate/registerCorporate';

const VendorRegisterInit: RegisterVendorReq = {
    name: "",
    location: "",
    mobileNumber: "",
    emailAddress: "",
    password: "",
}

const CorporateRegisterInit: RegisterCorporateReq = {
    companyName: "",
    companyLocation: "",
    companyAdminName: "",
    companyAdminMobileNumber: "",
    companyAdminEmailAddress: "",
    password: "",
    role:"ROLE_CORPORATE"
}

const initState: LoginRequest = {
    mobileNumber: "",
    password: "",
}

export default function Login() {

    const [authData, setAuthData] = React.useState(initState);
    const [vendorRegister, setVendorRegister] = React.useState<RegisterVendorReq>(VendorRegisterInit);

    const [corporateRegister, setCorporateRegister] = React.useState(CorporateRegisterInit);

    const [formType, setFormType] = React.useState("login");

    const handleDataChange = (field: keyof typeof authData, value: string) => {
        setAuthData((prev: typeof authData) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleVendorRegister = (field: keyof typeof vendorRegister, value: string) => {
        setVendorRegister((prev: typeof vendorRegister) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleCorporateRegister = (field: keyof typeof corporateRegister, value: string) => {
        setCorporateRegister((prev: typeof corporateRegister) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleClose = async () => {
        if (formType === "login") {
            console.log(authData);
            const resp = await login(authData);
            console.log("response : ", resp);
        }

        if (formType === "vendorRegister") {
            console.log(vendorRegister);
            const resp = await registerVendor(vendorRegister);
            console.log(resp);
        }

        if (formType === "corporateRegister") {
            console.log(corporateRegister);
            const resp = await registerCorporate(corporateRegister);
            console.log(resp);
        }
    };

    return (
        <div className='bg-[#eeeeee] h-screen flex justify-center overflow-auto'>
            <div className="w-[50%] lg:w-[75%] bg-[url('/images/login-bg.png')] bg-cover bg-center bg-no-repeat" >
            </div>
            <div className='h-full w-[50%] lg:w-[25%] px-3 lg:px-4 flex flex-col items-center justify-center'>
                <form className='w-9/10 px-5 py-3 shadow-lg hover:shadow-2xl rounded-2xl bg-white flex flex-col items-center justify-center transition-shadow duration-150'>
                    <div className='text-center mb-1 flex flex-col justify-center items-center'>
                        <Link className='justify-center flex' href="/">
                            <img src="images/sanjivani-logo.png" className='w-[70%] h-auto' alt="Sanjivani Logo" />
                        </Link>
                        <h1 className='text-gray-600 font-bold text-xl uppercase' >Sanjivani ERP</h1>
                    </div>

                    {formType === "login" && (
                        <>
                            <FormInput label="Phone" icon='phone' type="tel" placeholder='Enter Mobile Number' value={authData.mobileNumber} onChange={(value) => handleDataChange('mobileNumber', value)} />
                            <FormInput label="Password" icon='password' type="password" placeholder='Enter Password' value={authData.password} onChange={(value) => handleDataChange('password', value)} />
                        </>
                    )}

                    {formType === "volunteer" && (
                        <>
                            <FormInput label="Full Name" icon='user' type="text" value={vendorRegister.name} onChange={(value) => handleVendorRegister('name', value)} />
                            <FormInput label="Location" icon='user' type="text" value={vendorRegister.location} onChange={(value) => handleVendorRegister('location', value)} />
                            <FormInput label="Phone Number" icon='phone' type="tel" value={vendorRegister.mobileNumber} onChange={(value) => handleVendorRegister('mobileNumber', value)} />
                            <FormInput label="Email" icon='email' type="email" value={vendorRegister.emailAddress} onChange={(value) => handleVendorRegister('emailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" value={vendorRegister.password} onChange={(value) => handleVendorRegister('password', value)} />
                        </>
                    )}

                    {formType === "corporateRegister" && (
                        <>
                            <FormInput label="Company Name" icon='user' type="text" value={corporateRegister.companyName} onChange={(value) => handleCorporateRegister('companyName', value)} />
                            <FormInput label="Company Location" icon='location' type="text" value={corporateRegister.companyLocation} onChange={(value) => handleCorporateRegister('companyLocation', value)} />
                            <FormInput label="Admin Name" icon='user' type="text" value={corporateRegister.companyAdminName} onChange={(value) => handleCorporateRegister('companyAdminName', value)} />
                            <FormInput label="Admin Mobile Number" icon='phone' type="tel" value={corporateRegister.companyAdminMobileNumber} onChange={(value) => handleCorporateRegister('companyAdminMobileNumber', value)} />
                            <FormInput label="Admin Email Address" icon='email' type="email" value={corporateRegister.companyAdminEmailAddress} onChange={(value) => handleCorporateRegister('companyAdminEmailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" value={corporateRegister.password} onChange={(value) => handleCorporateRegister('password', value)} />
                        </>
                    )}

                    <button type="button" onClick={handleClose} className='mt-5 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer'>
                        {formType === 'login' ? 'login' : "register"}
                    </button>

                    <div className='text-center w-full mt-3 flex justify-evenly'>
                        {formType === "login" ? (
                            <>
                                <button type="button" className='text-purple-600 underline text-sm cursor-pointer' onClick={() => setFormType("vendorRegister")}>volunteer</button>
                                <button type="button" className='text-purple-600 underline text-sm cursor-pointer' onClick={() => setFormType("corporateRegister")}>Corporate Register ?</button>
                            </>
                        ) : (
                            <button type="button" className='text-purple-600 text-sm cursor-pointer' onClick={() => setFormType("login")}>go to login</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
