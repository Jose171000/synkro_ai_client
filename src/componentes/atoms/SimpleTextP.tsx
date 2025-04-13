import React from "react";

interface SimpleTextPProps {
    children: React.ReactNode;
    className?: string;
}

const SimpleTextP: React.FC<SimpleTextPProps> = ({ children, className = 'text-gray-700 text-base' }) => {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    )
}

export default SimpleTextP;