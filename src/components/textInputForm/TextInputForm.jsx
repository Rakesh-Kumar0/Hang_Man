import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";

function TextInputForm({onSubmit}){
    
    // this variable will set the value on console
    const [value, setValue] = useState('');

    // this variable will set the toggle button in form like show button in password
    const [inputType, setInputType] = useState('password');
    // this function will handle the ui page from refreshing and when we submit the form this function will get executrd
    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
        onSubmit ?.(value) // if on submit is defined, call it with the value
    }
    // this function will handle the text in input and when we change anything in form  this function will get executed
    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);// it will give the output that we enter in form
        setValue(event.target.value) // whenever i type in the input field, it will update the value
    }
    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 
                    label="Enter a word and phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>

            <div>
                <Button 
                    styleType="warning"
                    text={inputType === 'password' ? 'Show' : 'Hide'}
                    onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>
            <div >
                <Button 
                    styleType="primary"
                    text="OK"
                    type="submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;