import { SetStateAction, useState } from 'react';
 
const useInput = (validatedValue: (arg0: string) => any) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
 
    const valueIsValid = validatedValue(enteredValue);
    const hasError = !valueIsValid && isTouched;
 
    const valueChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEnteredValue(event.target.value);
    };
 
    const valueBlurHandler = () => {
        setIsTouched(true);
    };
 
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };
 
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    };
};
 
export default useInput;
 