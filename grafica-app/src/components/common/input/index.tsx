import { FormatUtils } from '@4us-dev/utils'
import { InputHTMLAttributes } from 'react';

const formatUtils = new FormatUtils();

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    columnClasses?: string;
    error?: string;
    inputtype?: string;
    formatter?: (value: string) => string;
    onChange: (value: any) => void
}

export const Input: React.FC<InputProps> = ({
    label,
    columnClasses,
    id,
    type,
    error,
    formatter,
    onChange,
    ...inputProps
}: InputProps) => {

    const onInputChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.name;
        const formattedValue = (formatter && formatter(value as string)) || value
        onChange(formattedValue)
    }

    return (
        <div className={`field column ${columnClasses}` }>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input type={type != undefined ? type : "string"} className="input" 
                    onChange={onInputChange}
                    id={id} {...inputProps} />
                {error &&
                    <p className="help is-danger">{ error }</p>
                }
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

export const DropdownMenu: React.FC<DropdownProps> = (props: DropdownProps) => {
    function renderItems(){
        return props.items.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
        })
    }
    return(
        <div className={`field column ${props.columnClasses}`}>
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <div className="select is-primary">
                <select
                
                onChange={ event => {
                    if(props.onChange){
                        props.onChange(event.target.value);
                    }
                }}>
                    {renderItems()}
                </select>
            </div>
        </div>       
    )
}

export const InputCPF: React.FC<InputProps> = (props: InputProps) => {
    return (
        <Input {...props} formatter={formatUtils.formatCPF} />
    )
}

export const InputTelefone: React.FC<InputProps> = (props: InputProps) => {
    return (
        <Input {...props} formatter={formatUtils.formatPhone} />
    )
}
