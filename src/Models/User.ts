export type User = {
    id: number,
    username: string,
    password: string,
    first: string,
    last: string,
    phone: string,
    email: string,
    imageUrl: string,
    creditCard: {
        pan: string,
        expiryMonth: number,
        expiryYear: number
    },
    adminUser: boolean,
    isServer: boolean
};