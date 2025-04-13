import React from "react";
import FormGroup from "../molecules/FormGroup";
import Button from "../atoms/Button";

interface AuthFormProps {
    isLogin: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = true, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <FormGroup label="Email" type="email" placeholder="Enter your email" value="" onChange={() => { }}/>
            <FormGroup label="Password" type="password" placeholder="Password" value="" onChange={() => { }} />
            <Button type="submit" className="w-full" onClick={() => { }}>{isLogin ? 'Login' : 'Register'}</Button>
        </form>
    )
}


export default AuthForm;