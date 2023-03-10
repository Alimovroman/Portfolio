import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action={''} className={style.form}>
                    <input type={'text'} placeholder={'input'}/>
                    <input type={'text'} placeholder={'input'}/>
                    <textarea placeholder={'Enter the text'} />
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;