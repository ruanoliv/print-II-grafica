import { Layout } from '../../layout'
import { Input } from '../../common/input'
import { useState } from 'react'
import { Order } from '../../../app/model/order'
import { useOrderService } from '../../../app/service/order.service'

export const AddOrder = () => {

    const service = useOrderService()
    const[dateDeliver, setDateDeliver] = useState('')
    const[price, setPrice] = useState('')
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[type, setType] = useState('')

    const ClearFields = () => {
        setDateDeliver('')
        setDescription('')
        setName('')
        setPrice('')
        setType('')
    }

    const Submit = () => {
        const order: Order = {
            description,
            name,
            dateDeliver,
            price: parseFloat(price),
            type
        }
        service
        .salvar(order)
        .then(orderResponse => console.log(orderResponse))
    }

    return (
        <Layout title="Cadastrar pedido">
            <div className="columns">
                <Input
                    label="Nome *"
                    columnClasses="is-half"
                    onChange={setName}
                    placeholder="Digite o NOME do pedido"
                    id="inputName"
                    value={name}
                    inputType="text"
                />
                <Input
                    label="Preço *"
                    columnClasses="is-half"
                    onChange={setPrice}
                    placeholder="Digite o PREÇO do pedido"
                    id="inputPrice"
                    value={price}
                    inputType="text"
                />
            </div>

            <div className="columns">
                <Input
                    label="Tipo *"
                    onChange={setType}
                    placeholder="Digite o TIPO do pedido"
                    id="inputType"
                    value={type}
                    inputType="text"
                />
                <Input
                    label="Data de entrega *"
                    onChange={setDateDeliver}
                    placeholder="Digite o DATA DE ENTREGA do pedido"
                    id="inputDateDeliver"
                    value={dateDeliver}
                    inputType="text"
                />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="textDescription">Descrição</label>
                    <div className="control">
                        <textarea
                            id="textDescription" name="description" onChange={e=>{setDescription(e.target.value)}}
                            className="textarea" placeholder="Digite a DESCRIÇÃO detalhada do pedido"></textarea>
                    </div>
                </div>
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