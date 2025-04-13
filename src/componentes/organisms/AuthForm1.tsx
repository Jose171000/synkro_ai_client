import React from "react";
import LoginForm from "../molecules/LoginForm";
import Button from "../atoms/Button";
import ButtonForm from "../molecules/ButtonForm";
import Link from "next/link";

interface AuthForm1Props {
    isLogin: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

const AuthForm1: React.FC<AuthForm1Props> = ({ isLogin = true, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="bg-white px-10 py-8 rounded-b-xl space-y-4">
            <LoginForm label="Escribe tu nombre" type="text" placeholder="Jimena Martínez" value="" onChange={() => { }} htmlFor="text" />
            <LoginForm label="Escribe tu correo electrónico" type="email" placeholder="hola@sitioincreible.pe" value="" onChange={() => { }} htmlFor="email" />
            <LoginForm label="Escribe tu contraseña" type="password" placeholder="********" value="" onChange={() => { }} htmlFor="password" />
            <Link href="./">
                <ButtonForm type="submit" className="flex justify-center">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</ButtonForm>
            </Link>
        </form>
    )
}


export default AuthForm1;