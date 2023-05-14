import React from 'react';
import style from './Contacts.module.scss';
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={'Contacts'} />
                <form action={''} className={style.form}>
                    <div className={style.inputWrapper}>
                        <input type={'text'} placeholder={'input'}/>
                    </div>
                    <div className={style.inputWrapper}>
                        <input type={'text'} placeholder={'input'}/>
                    </div>
                    <div className={style.textareaWrapper}>
                        <textarea placeholder={'Enter the text'} />
                    </div>
                    <div>
                        <Button title={'Send'} />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Contacts;