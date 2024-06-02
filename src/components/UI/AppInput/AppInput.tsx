import { ErrorMessage, SCAppInput} from "./AppInput.style";

interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType: "password" | "email" | "text"
    inputPlaceholder: string;
    isError: boolean;
    errorText?: string;
    isRequired: boolean
}

const AppInput = ({
    inputType, 
    inputPlaceholder, 
    isRequired,
    isError,
    errorText, 
    ...props
    }: TOAppInput) => {
    return (
    <>   
        <SCAppInput 
        type={inputType} 
        placeholder={inputPlaceholder} 
        required={isRequired} 
        {...props} 
        $isError={isError || false}
        />
        {isError && <ErrorMessage>{errorText}</ErrorMessage>}
    </>
    );
};

export default AppInput;