import React from "react";
import '../styles/globals.css';
import AuthForm1 from "../componentes/organisms/AuthForm1";
import AuthFormTitle from "../componentes/organisms/AuthFormTitle";

const LoginPage: React.FC = () => {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login');
    }

    return (<>
        <div className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-xl shadow-lg rounded-xl overflow-hidden">
                <AuthFormTitle />

                <AuthForm1 isLogin={true} onSubmit={handleLogin} />
            </div>
        </div>
    </>
    )
}

export default LoginPage;