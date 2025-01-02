
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import LoginForm from '@/Components/Forms/LoginForm';


export default function Login() {
    

    return (
        <GuestLayout>
            <Head title='Login' />
            
            <LoginForm />
            
        </GuestLayout>
    );
}
