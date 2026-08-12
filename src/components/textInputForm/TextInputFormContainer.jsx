import { useState } from "react";
import TextInputForm from "./TextInputForm";

// Container component for TextInputForm
function TextInputFormContainer({onSubmit}){
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
        <TextInputForm 
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    )
}

export default TextInputFormContainer;