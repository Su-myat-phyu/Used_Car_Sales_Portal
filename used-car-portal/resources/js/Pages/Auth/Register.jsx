
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import RegistrationForm from '@/Components/Forms/RegistrationForm';


export default function Register() {
    

    return (
        <GuestLayout>
            <Head title='Register' />
            
            <RegistrationForm />
            
        </GuestLayout>
    );
}
