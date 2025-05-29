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
                message: 'InvalidEmailMessage',
                description: 'InvalidEmailDescription',
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
                message: 'SuccessMessage',
                description: 'SuccessDescription',
            };
        }
    } catch (e) {
        console.error(e);
        return {
            message: 'ServerErrorMessage',
            description: 'ServerErrorDescription',
            error: true,
        };
    }
};
