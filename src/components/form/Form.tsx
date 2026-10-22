import type React from "react";
import { form } from "../../data";
import Button from "../button/Button";
import './Form.scss'
import { useState } from "react";

export default function Form(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        let valid = true;
        setError('');
        setSuccess(false);
        if (name.length < 1){
            valid = false;
            setError("Имя не может быть пустым")
        }
        const mask = /^[+]?[0-9]{10,15}$/
        if (!phone.match(mask)){
            valid = false;
            setError("Неверный формат телефона")
        }
        if (!agreed) {
            setError('согласие необходимо');
            valid = false;
        }
        if (valid) {
            setSuccess(true);
        }
    }
    return(
        <section className="form">
            <div className="form__bg">
                <div className="form__gradient"></div>
                <div className="form__imgContainer">
                    <img className="form__img" src={form.imgLink} alt="" />
                </div>
                <img className="form__cover" src={"images/cover.svg"} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="form__content">
                <h3 className="form__title">{form.header}</h3>
                <p className="form__text">{form.text}</p>
                <div className="form__row">
                    <div className="form__inputContainer">
                        <label 
                            className="form__inputLabel" 
                            htmlFor='name'>
                                {form.inputs[0].caption}
                        </label>
                        <input 
                            className="form__input" 
                            id='name' 
                            type={form.inputs[0].type} 
                            placeholder={form.inputs[0].placeholder}
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form__inputContainer">
                        <label 
                            className="form__inputLabel" 
                            htmlFor='tel'>
                                {form.inputs[1].caption}
                        </label>
                        <input 
                            className="form__input" 
                            id='tel' 
                            type={form.inputs[1].type} 
                            placeholder={form.inputs[1].placeholder}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="form__button"><Button {...form.button}/></div>
                </div>
                <span className="form__agreement">     
                    <input 
                        className="form__checkbox" 
                        type="checkbox" 
                        id="agree"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label className="form__caption" htmlFor="agree">
                        <span className="form__agreeString">
                            <span className="form__agreeText" >{`${form.agreement}`}</span>
                            <span>{"\u00A0"}</span>
                            <a className="form__agreeLink" href={form.link.href}>{form.link.text}</a>
                        </span>
                    </label>                       
                </span>
                <div className="form__result">
                    {success ?  'Форма успешно отправлена' : error ? error : ''}
                </div>
            </form>
        </section> 
    )
}