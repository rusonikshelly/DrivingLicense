import React from "react";
import './form-input.css'

interface FormInputProps {
    placeholder : string
}
 
export const FormInput: React.FC<FormInputProps> = (props) => {
    return (  
        <div className="form-input">
            <label className="form-input-label">label</label>
            <input className="form-input-ui" placeholder={props.placeholder}/>
        </div>
    );
};
 
