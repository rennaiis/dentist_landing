import { form } from "../../data";
import Button from "../button/Button";
import Picture from "../Picture";
import './Form.scss'

export default function Form(){
    return(
        <section className="form">
            <div className="form__bg">
                <div className="form__imgContainer">
                    <img className="form__img" src={form.imgLink} alt="" />
                </div>
            </div>
            <form className="form__content">
                <h3 className="form__title">{form.header}</h3>
                <p className="form__text">{form.text}</p>
                <div className="form__row">
                    {form.inputs.map((item, index)=>(
                        <div className="form__inputContainer">
                            <label className="form__inputLabel" htmlFor={`input-${index}`}>{item.caption}</label>
                            <input className="form__input" id={`input-${index}`} type={item.type} placeholder={item.placeholder}/>
                        </div>
                    ))}
                    <div className="form__button"><Button {...form.button}/></div>
                </div>
                <span className="form__agreement">     
                    <input className="form__checkbox" type="checkbox" id="agree"/>
                    <label className="form__caption" htmlFor="agree">
                        <span className="form__agreeString">
                            <span className="form__agreeText" >{`${form.agreement}`}</span>
                            <span>{"\u00A0"}</span>
                            <a className="form__agreeLink" href={form.link.href}>{form.link.text}</a>
                        </span>
                    </label>
                    
                        
                </span>
            </form>
        </section> 
    )
}