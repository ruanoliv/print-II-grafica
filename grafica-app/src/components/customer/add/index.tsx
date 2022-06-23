import { Layout } from '../../layout'
import { DropdownMenu, Input, InputCPF, InputTelefone } from '../../common/input'
import { useState } from 'react'
import { Customer, Address } from '../../../app/model/customer'
import { useCustomerService } from '../../../app/service/customer.service'

export const AddCustomer = () => {

    // depois dá p fazer um banco pra isso
    const sexMenu = ["Masculino", "Feminino", "Outro"]
    const stateMenu = ["CE", "PE"]
    const countryMenu = ["BR"]

    const[sex, setSex] = useState(sexMenu[0])
    const[phone, setPhone] = useState('')
    const[name, setName] = useState('')
    const[cpf, setCPF] = useState('')
    const[street, setStreet] = useState('')
    const[number, setNumber] = useState('')
    const[district, setDistrict] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState(stateMenu[0])
    const[country, setCountry] = useState(countryMenu[0])

    const ClearFields = () => {
        setName('')
        setPhone('')
        setCPF('')
        setStreet('')
        setNumber('')
        setDistrict('')
        setCity('')
    }

    const service = useCustomerService()

    const Submit = () => {
        const address: Address = {
            street, 
            number: +number, 
            district: district.toString(), 
            city, 
            state, 
            country
        }
        const customer: Customer = {
            name,
            phone: phone.match(/\d/g)?.join("") || "",
            cpf: cpf.match(/\d/g)?.join("") || "",
            sex: sex.charAt(0),
            address
        }
        service.salvar(customer)
        .then(customerResponse => console.log(customerResponse))
        .catch(error => console.log("deu erro bro"))
    }

    return (
        <Layout title="Cadastrar cliente">
            <div className="columns">
                <Input
                    id="name" 
                    name="name"
                    label="Nome: *"
                    autoComplete="off"
                    columnClasses="is-half"
                    onChange={setName} 
                />
                <InputTelefone
                    id="phone" 
                    name="phone"
                    label="Telefone: *"
                    autoComplete="off" 
                    columnClasses="is-half"
                    onChange={setPhone} 
                    value={phone}
                />
            </div>

            <div className="columns">
                <InputCPF
                    id="cpf" 
                    name="cpf"
                    label="CPF: *"
                    autoComplete="off" 
                    columnClasses="is-half"
                    onChange={setCPF} 
                    value={cpf} 
                />
                <DropdownMenu
                    onChange={setSex}
                    label="Sexo *" 
                    columnClasses="is-half"
                    id="inputSex"                  
                    items={sexMenu}
                />
            </div>

            <div className="columns">
                <Input
                    id="street"
                    name="street"
                    label="Street *"
                    autoComplete="off" 
                    columnClasses="is-one-third"
                    onChange={setStreet}              
                    value={street}
                />
                <Input
                    id="number"
                    name="number"
                    label="Number *"
                    autoComplete="off"    
                    columnClasses="is-one-third"
                    onChange={setNumber}               
                    value={number}
                    inputtype="number"
                />
                <Input
                    id="district"
                    name="district"
                    label="District *"
                    autoComplete="off"    
                    columnClasses="is-one-third"
                    onChange={setDistrict}               
                    value={district}
                />
            </div>

            <div className="columns">
                <Input
                    id="city"
                    name="city"
                    label="City *"
                    autoComplete="off"    
                    columnClasses="is-one-third"
                    onChange={setCity}               
                    value={city}
                />
               <DropdownMenu
                    onChange={setState}
                    label="State *" 
                    columnClasses="is-one-third"
                    id="inputState"                  
                    items={stateMenu}
                />
                <DropdownMenu
                    onChange={setCountry}
                    label="Country *" 
                    columnClasses="is-one-third"
                    id="inputCountry"                  
                    items={countryMenu}
                />
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button
                        onClick={Submit}
                        className="button is-dark">
                        Salvar
                    </button>
                </div>
                <div className="control">
                    <button 
                        onClick={ClearFields}
                        className="button is-dark">
                        Limpar campos
                    </button>
                </div>
            </div>
        </Layout>
    )
}