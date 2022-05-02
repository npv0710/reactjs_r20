export default class Account {
    private id: number
    private username: string

    constructor(id: number, username: string) {
        this.id = id
        this.username = username
    }

    public getId() {
        return this.id
    }

    public getUsername() {
        return this.username
    }
}

export function showAccountInfo(ac: Account) {
    console.log('Account info: ')
    console.log('[id = ' + ac.getId() + '; username = ' + ac.getUsername() + ']')
}