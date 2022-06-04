import { Layout } from '../../layout'
import { DropdownMenu, Input } from '../../common/input'
import { useState } from 'react'
import { Customer, Address, AddressList } from '../../../app/model/customer'
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
            phone,
            cpf,
            sex: sex.charAt(0),
            address
        }
        service.salvar(customer)
        .then(customerResponse => console.log(customerResponse))
        .catch(error => console.log('deu erro man'))
    }

    return (
        <Layout title="Cadastrar cliente">
            <div className="columns">
                <Input
                    label="Nome *"
                    columnClasses="is-half"
                    onChange={setName}
                    inputType="text"
                    placeholder="Digite o nome do cliente"
                    id="inputName"
                    value={name}
                />
                <Input
                    label="Telefone *"
                    columnClasses="is-half"
                    onChange={setPhone}
                    inputType="number"
                    placeholder="Digite o telefone do cliente"
                    id="inputPhone"
                    value={phone}
                />
            </div>

            <div className="columns">
                <Input
                    label="CPF *"
                    onChange={setCPF}
                    inputType="number"
                    placeholder="Digite o CPF do cliente"
                    id="inputCPF"
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
                    label="Street *"
                    onChange={setStreet}
                    placeholder=""
                    inputType="text"
                    columnClasses="is-one-third"
                    id="inputStreet"
                    value={street}
                />
                <Input
                    label="Number *"
                    onChange={setNumber}
                    placeholder=""
                    inputType="number"
                    columnClasses="is-one-third"
                    id="inputNumber"
                    value={number}
                />
                <Input
                    label="District *"
                    inputType="text"
                    onChange={setDistrict}
                    placeholder=""
                    columnClasses="is-one-third"
                    id="inputDistrict"
                    value={district}
                />
            </div>

            <div className="columns">
                <Input
                    label="City *"
                    onChange={setCity}
                    placeholder=""
                    inputType="text"
                    columnClasses="is-one-third"
                    id="inputCity"
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