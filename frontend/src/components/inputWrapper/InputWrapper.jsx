function InputWrapper({ label, type, id, onChange, value, placeholder, disabled}) {
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled}/>
        </div>
        )
}

export default InputWrapper
