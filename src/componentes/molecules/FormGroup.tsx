import React from "react";
import Label from "../atoms/Labels";
import Input from "../atoms/Input";

interface FormGroupProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <Label htmlFor={label.toLowerCase()}>{label}</Label>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full"/>
        </div>
    )
}

export default FormGroup;