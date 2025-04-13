import React from "react";
import Button from "../atoms/Button";

interface ButtonFormProps {
    type: "submit" | "button" | "reset";
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ type, className = 'mb-4 ', onClick = () => { }, children }) => {
    return (
        <div className={`${className}`}>
            <Button type={type} onClick={onClick} className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-2 rounded-full font-medium">
                {children}
            </Button>
        </div>
    )
}

export default ButtonForm;
