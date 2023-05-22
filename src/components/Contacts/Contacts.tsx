import React, {FormEvent, FormEventHandler, useRef, useState} from 'react';
import style from './Contacts.module.scss';
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';


type FormData = {
    name: string
    email: string
    message: string
}

const Contacts = () => {
    // const [name,setName] =useState('')
    // const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.current) {
            emailjs.sendForm('service_5nyhgh4', 'template_oovnf1j', form.current, 'AdSf-sukNqzIlMfXC')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
        }
        e.currentTarget.reset();
    };

    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={'Contacts'}/>
                <form ref={form} action={''} className={style.form} onSubmit={sendEmail}>
                    <div className={style.inputWrapper}>
                        <input type={'text'} placeholder={'Your name'} name={"name"} required/>
                    </div>
                    <div className={style.inputWrapper}>
                        <input type={'text'} placeholder={'Your Email'} name={"email"} required/>
                    </div>
                    <div className={style.textareaWrapper}>
                        <textarea placeholder={'Please write what you want'} name={"message"}/>
                    </div>
                    <div>
                        <Button title={'Send'}/>
                    </div>
                </form>

            </div>
        </div>
    );
};


export default Contacts;