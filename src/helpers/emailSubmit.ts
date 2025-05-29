'use client';

import emailjs from '@emailjs/browser';

import { ModalWindowMessageType } from '@/types';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const emailSubmit = async (
    formData: FormData,
): Promise<ModalWindowMessageType> => {
    try {
        const email = formData.get('email') as string;
        if (!emailRegex.test(email)) {
            return {
                message: 'Incorrect email',
                description: 'Please check it',
                error: true,
            };
        } else {
            await emailjs.send(
                process.env.EMAIL_SERVICE_ID!,
                process.env.EMAIL_TEMPLATE_ID!,
                { email: email, name: email },
                { publicKey: process.env.EMAIL_PUBLIC_KEY! },
            );
            return {
                message: 'Success',
                description: 'Your email was send successfully',
            };
        }
    } catch (e) {
        console.error(e);
        return {
            message: 'Error',
            description: 'Something went wrong',
            error: true,
        };
    }
};
