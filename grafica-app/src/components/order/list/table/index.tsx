import { Order } from '../../../../app/model/order'

interface TabelaOrderProps{
    orders: Array<Order>
}

export const TabelaOrder: React.FC<TabelaOrderProps> = ({
    orders
}) => {
    return(
        <table className="table is-striped is-hoveable">
            <thead>
                <th>Código do pedido</th>
                <th>Código do cliente</th>
                <th>Código do administrador</th>
                <th>Descrição</th>
                <th>Nome</th>
                <th>Data do pedido</th>
                <th>Data de entrega</th>
                <th>Preço *</th>
                <th>Tipo</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                {
                    orders.map(order => <OrderRow key={order.id} order={order}/>)
                }
            </tbody>
        </table>
    )
}

interface OrderRowProps{
    order: Order
}

const OrderRow: React.FC<OrderRowProps> = ({order}) => {
    return(
        <tr>
            <td>{order.id}</td>
            <td></td>
            <td></td>
            <td>{order.description}</td>
            <td>{order.name}</td>
            <td>{order.dateOrder}</td>
            <td>{order.dateDeliver}</td>
            <td>{order.price}</td>
            <td>{order.type}</td>
            <td>
                <button className="button is-sucess">Editar</button>
            </td>
            <td>
                <button className="button is-sucess">Deletar</button>
            </td>
        </tr>
    )
}