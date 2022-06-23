import { Layout } from '../../layout'
import { Input, DropdownMenu } from '../../common/input'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { httpClient } from '../../../app/http'
import { Order } from '../../../app/model/order'
import { Customer } from '../../../app/model/customer'
import { useOrderService } from '../../../app/service/order.service'

export const AddOrder = () => {

    const service = useOrderService()
    const [dateDeliver, setDateDeliver] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState<string>('')
    const [dateOrder, setDateOrder] = useState<string>('')
    const [administrator, setAdministrator] = useState('')
    const [customer, setCustomer] = useState('')

    const { data: result, error } = useSWR<AxiosResponse<Customer[]>>
                    ('/api/customer', url => httpClient.get(url) )


    const [ lista, setLista ] = useState<string[]>([])

    useEffect( () => {
        setLista(result?.data.map((customer: Customer) => customer.name) || [])
    }, [result])

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
            .then(orderResponse => {
                setId(orderResponse.id)
                setDateOrder(orderResponse.dateOrder)
                console.log(orderResponse)
            })
    }

    return (
        <Layout title="Cadastrar pedido">
            {id &&
                <div className="columns">
                    <Input
                        label="Código: "
                        columnClasses="is-half"
                        id="code"
                        name="code"
                        value={name}
                        disabled
                    />
                    <Input
                        label="Data de cadastro: "
                        columnClasses="is-half"
                        id="price"
                        name="dateOrder"
                        value={dateOrder}
                        disabled
                    />
                </div>
            }
            <div className="columns">
                <Input
                    label="Administrador *"
                    columnClasses="is-half"
                    onChange={setAdministrator}
                    placeholder="Administrador logado"
                    id="administrator"
                    name="administrator"
                    value={administrator}
                />
                <DropdownMenu
                    onChange={setCustomer}
                    label="Cliente *" 
                    columnClasses="is-one-third"
                    id="customer"                  
                    items={lista}
                />
            </div>
            <div className="columns">
                <Input
                    label="Nome *"
                    columnClasses="is-half"
                    onChange={setName}
                    placeholder="Digite o NOME do pedido"
                    id="name"
                    name="name"
                    value={name}
                />
                <Input
                    label="Preço *"
                    columnClasses="is-half"
                    onChange={setPrice}
                    placeholder="Digite o PREÇO do pedido"
                    id="price"
                    name="price"
                    value={price}
                />
            </div>

            <div className="columns">
                <Input
                    label="Tipo *"
                    onChange={setType}
                    placeholder="Digite o TIPO do pedido"
                    id="type"
                    name="type"
                    value={type}
                />
                <Input
                    label="Data de entrega *"
                    onChange={setDateDeliver}
                    placeholder="Digite o DATA DE ENTREGA do pedido"
                    id="dateDeliver"
                    name="dateDeliver"
                    value={dateDeliver}
                />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="textDescription">Descrição</label>
                    <div className="control">
                        <textarea
                            id="textDescription" name="description" onChange={e => { setDescription(e.target.value) }}
                            className="textarea" placeholder="Digite a DESCRIÇÃO detalhada do pedido"></textarea>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button
                        onClick={Submit}
                        className="button is-dark">
                            {
                                id ? 'Atualizar' : 'Salvar'
                            }
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