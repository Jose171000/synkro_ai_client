import React from "react";
import Label from "../atoms/Labels";
import Input from "../atoms/Input";

interface LoginFormProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    htmlFor: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ label, type, placeholder, value, onChange, className = '', htmlFor }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <Label htmlFor={htmlFor} className="block text-xs text-gray-500 mb-1 uppercase">{label}</Label>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none"/>
        </div>
    )
}

export default LoginForm;