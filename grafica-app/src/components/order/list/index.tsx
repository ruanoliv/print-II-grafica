import { useEffect } from 'react'
import { Loader } from '../../common/loader'
import { Layout } from '../../layout'
import Link from 'next/link'
import Router from 'next/router'
import { TabelaOrder } from './table'
import { Order } from '../../../app/model/order'
import useSWR from 'swr'
import { httpClient } from '../../../app/http'
import { AxiosResponse } from 'axios'
import { useOrderService } from '../../../app/service/order.service'
import { useState } from 'react'
import { Alert } from '../../common/message'

export const ListagemOrders: React.FC = () => {

    const service = useOrderService();
    const [ messages, setMessages ] = useState<Array<Alert>>([])
    const { data: result, error } = useSWR<AxiosResponse<Order[]>>
                    ('/api/order', url => httpClient.get(url) )

    const [ lista, setLista ] = useState<Order[]>([])

    useEffect( () => {
        setLista(result?.data || [])
    }, [result])

    const editar = (order : Order) => {
        const url = `/add/order?id=${order.id}`
        Router.push(url)
    } 

    const deletar = (order : Order) => {
        service.deletar(order.id).then(response => {
            setMessages([
                {  tipo: "success", texto: "Produto excluido com sucesso!" }
            ])
            const listaAlterada: Order[] = lista?.filter( p => p.id !== order.id )
            setLista(listaAlterada)
        })
    }

    return (
        <Layout title="Pedidos" mensagens={messages}>
            <Link href="/add/order">
                <button className="button is-warning">Novo</button>
            </Link>
            <br /><br />
            <Loader show={!result} />
            <TabelaOrder onEdit={editar} onDelete={deletar} orders={lista} />
        </Layout>
    )
}