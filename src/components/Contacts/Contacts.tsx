import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../common/styles/Container.module.css';
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                {/*<h2 className={styleContainer.title}>Contacts</h2>*/}
                <Title title={'Contacts'} />
                <form action={''} className={style.form}>
                    <input type={'text'} placeholder={'input'}/>
                    <input type={'text'} placeholder={'input'}/>
                    <textarea placeholder={'Enter the text'} />
                    <Button title={'Send'} />
                    {/*<button className={styleContainer.button} type={"submit"}>Send</button>*/}
                </form>

            </div>
        </div>
    );
};

export default Contacts;