import { Layout } from '../../layout'
import { Input } from '../../common/input'
import { useState } from 'react'
import { Employee } from '../../../app/model/employee'
import { useEmployeeService } from '../../../app/service/employee.service'

export const AddEmployee = () => {

    const service = useEmployeeService()
    const[user, setUser] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')

    const ClearFields = () => {
        setUser('')
        setPassword('')
        setName('')
    }

    const Submit = () => {
        const employee: Employee = {
            user,
            password,
            name
        }
        service
        .salvar(employee)
        .then(employeeResponse => console.log(employeeResponse))
    }

    return (
        <Layout title="Cadastrar funcionário">
            <div className="columns">
                <Input
                    label="Usuário *"
                    columnClasses="is-half"
                    onChange={setUser}
                    placeholder="Digite o seu USUÁRIO"
                    id="inputUser"
                    value={user}
                    inputType="text"
                />
                <Input
                    label="Senha *"
                    columnClasses="is-half"
                    onChange={setPassword}
                    placeholder="Digite a sua SENHA"
                    id="inputPassword"
                    value={password}
                    inputType="password"
                />  
            </div>

            <div className="columns">
                <Input
                    label="Nome *"
                    onChange={setName}
                    placeholder="Digite o seu NOME"
                    id="inputName"
                    value={name}
                    inputType="text"
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