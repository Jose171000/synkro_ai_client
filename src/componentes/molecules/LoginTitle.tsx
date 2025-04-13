import React from "react";
import TitleH1 from "../atoms/TitleH1";
import SimpleTextP from "../atoms/SimpleTextP";

interface LoginTitleProps {
    title: string;
    description: string;
    className?: string;
}

const LoginTitle: React.FC<LoginTitleProps> = ({ title, description, className = 'text-center' }) => {
    return (
        <div className={`${className}`}>
            <TitleH1 className="text-2xl font-semibold text-gray-800">{title}</TitleH1>
            <SimpleTextP className="text-sm mt-2 text-gray-700">{description} <a href="#" className="underline">Accede</a></SimpleTextP>
        </div>
    )
}

export default LoginTitle;