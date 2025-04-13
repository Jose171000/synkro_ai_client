import React from "react";
import AuthForm from "../organisms/AuthForm";

const RegisterPage: React.FC = () => {
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register');
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <AuthForm isLogin={false} onSubmit={handleRegister} />
        </div>
    )
}


export default RegisterPage;