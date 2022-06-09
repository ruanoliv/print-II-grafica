interface InputProps{
    onChange?: (value: any) => void;
    label: string;
    placeholder?: string;
    columnClasses?: string;
    id: string;
    value: string;
    inputType?: string,
    disabled?: boolean 
}

export const Input: React.FC<InputProps> = ({onChange, label, placeholder, columnClasses, inputType, id, value,disabled}: InputProps) => {
    return(
        <div className={`field column ${columnClasses}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input
                    id={id} value={value} onChange={ event => {
                        if(onChange){
                            onChange(event.target.value);
                        }
                    }}
                    className="input" type={inputType} placeholder={placeholder} disabled={disabled}/>
            </div>
        </div>
    )
}

interface DropdownProps{
    onChange?: (value: any) => void
    label: string
    columnClasses: string;
    id: string;
    items: string[]
}

export const DropdownMenu: React.FC<DropdownProps> = ({onChange, label, id, columnClasses, items}: DropdownProps) => {
    function renderItems(){
        return items.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
        })
    }
    return(
        <div className={`field column ${columnClasses}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="select is-primary">
                <select
                
                onChange={ event => {
                    if(onChange){
                        onChange(event.target.value);
                    }
                }}>
                    {renderItems()}
                </select>
            </div>
        </div>       
    )
}
