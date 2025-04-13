import React from "react";
import LoginTitle from "../molecules/LoginTitle";

interface AuthFormTitleProps {
    title?: string; 
    description?: string;
}

const AuthFormTitle: React.FC<AuthFormTitleProps> = ({ title = "Crear una cuenta nueva", description = "¿Ya estás registrado?" }) => {
    return (
        <LoginTitle title={title} description={description} className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-center py-8" />
    )
}

export default AuthFormTitle;