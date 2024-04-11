import { useContext, useEffect } from 'react';
import { NameAndAmountDataContext } from '@/add/nameAndAmountData';
import "../history/history";

export default function Header() {
  const { transactions = [], deposits = [] } = useContext(NameAndAmountDataContext);

  const transactionsTotal = parseFloat(transactions.reduce((acc, item) => (acc += Number(item.amount)), 0)).toFixed(2);
  const depositsTotal = parseFloat(deposits.reduce((acc, item) => (acc += Number(item.amount)), 0)).toFixed(2);
  const total = transactionsTotal - depositsTotal;
  
  const displayAmount = document.getElementById('display-amount');
  if (total < 0) {
    displayAmount?.classList.remove('text-green-500')
    displayAmount?.classList.add('text-red-400')
  } else {
    displayAmount?.classList.remove('text-red-400')
    displayAmount?.classList.add('text-green-500')
  } 

  return (
      <>
        <header className="flex flex-col items-center sm:text-center">
        
        <h1 className="text-5xl p-5">Expense Tracker</h1>
        <h2></h2>
          <h2 className="text-3xl p-5">Your Balance</h2>
            <h3 className="text-3xl p-5"id='display-amount'>${total}</h3>
              <h3></h3>
            <div className="flex flex-row justify-center bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl">
              <div className="p-5">
                <h3 className='text-black'>INCOME</h3>
                <p className="text-green-500">+${transactionsTotal}</p>
                </div>
                <div className="text-3xl flex items-center text-gray-400">|</div>
                <div className="p-5">
                <h3 className='text-black'>EXPENSE</h3>
                <p className="text-red-400">-${depositsTotal}</p>
                </div>
            </div>
        </header>
    </>
  )
}
