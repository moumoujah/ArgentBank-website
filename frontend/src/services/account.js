import Account from '../data/account.json'

export function getAllAccount(){
    return Account
}

export function getAccountById(id){
    return Account.find((e) => e.id === id);
}