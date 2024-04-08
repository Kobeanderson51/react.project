import React from 'react';
import History from '@/history/history';

export default function Header() {
  return (
      <React.Fragment>
        <header className="flex flex-col items-center sm:text-center">
        
          <h1 className="text-5xl p-5">Expense Tracker</h1>
          <h2 className="text-3xl p-5">Your Balance</h2>
            <h3 className="text-3xl text-green-500 p-5"id='display-amount'>$0.00</h3>
              <h3></h3>
            <div className="flex flex-row justify-center bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl">
              <div className="p-5">
                <h3>INCOME</h3>
                <p className="text-green-500">+$0.00</p>
                </div>
                <div className="text-3xl flex items-center text-gray-400">|</div>
                <div className="p-5">
                <h3>EXPENSE</h3>
                <p className="text-red-400">-$0.00</p>
                </div>
            </div>
        </header>
    </React.Fragment>
  )
}
