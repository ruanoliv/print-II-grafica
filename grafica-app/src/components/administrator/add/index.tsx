import { Layout } from '../../layout'
import { useState } from 'react'
import { Input } from '../../common/input'
import { Administrator } from '../../../app/model/administrator'
import { useAdministratorService } from '../../../app/service/administrator.service'

export const AddAdministrator = () => {

    const service = useAdministratorService()
    const[user, setUser] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')

    const ClearFields = () => {
        setUser('')
        setPassword('')
        setName('')
    }

    const Submit = () => {
        const administrator: Administrator = {
            user,
            password
        }
        service
        .salvar(administrator)
        .then(administratorResponse => console.log(administratorResponse))
    }

    return (
        <Layout title="Cadastrar administrador">
            <div className="columns">
                <Input
                    label="Usuário *"
                    columnClasses="is-half"
                    onChange={setUser}
                    placeholder="Digite o seu USUÁRIO"
                    id="user"
                    name="user"
                    value={user}
                />
                <Input
                    label="Senha *"
                    columnClasses="is-half"
                    onChange={setPassword}
                    placeholder="Digite a sua SENHA"
                    id="password"
                    name="password"
                    value={password}
                    type="password"
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