import React from 'react';
import { getAllAccount } from '../../services/account.js'
import Account from "../../components/account/Account.jsx";
import FormUserName from "../../components/formUserName/FormUserName.jsx"

function User() {
  const account = getAllAccount(); 

    return (
        <main className="main bg-dark">
        
        <FormUserName/>       
          <h2 className="sr-only">Accounts</h2>
          {account.map( e=> (
          <Account
            key={e.id}
            title={e.title}
            amount={e.amount}
            amountDescription={e.amountDescription}
          />
          ))}
           

      </main>
    
    
    )
}

export default User