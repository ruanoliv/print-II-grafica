export interface Address {
    street: string
    number: number
    district: string
    city: string
    state: string
    country: string
}

export interface Customer{
    id: number
    name: string
    phone: string
    cpf: string
    sex: string
    address: Address
}

const customer: Customer = {}