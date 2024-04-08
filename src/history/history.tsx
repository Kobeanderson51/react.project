import { useContext } from 'react';
import { NameAndAmountDataContext } from '../add/nameAndAmountData'; 

export default function History() {

    const { transactions, deleteTransaction } = useContext(NameAndAmountDataContext);
    const { deposits, deleteDeposit } = useContext(NameAndAmountDataContext);

    return (
        <>
        <div className="flex justify-center mt-10">
        <h3 className="text-3xl">Transactions</h3>
        </div>
        <div className="mb-5 h-3/4">
            <div className="flex flex-col items-center p-10 overflow-y-scroll h-3/4">
                <ul className="w-96 h-2/3 p-5">
                    {
                        transactions.map((transaction, index) => {
                            return (
                                <li key={transaction.id} className="flex justify-between p-5 bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl mb-5">
                                    <div>{transaction.name}</div>
                                    <div id="amount">+${transaction.amount}</div>
                                    <div className="text-red-400" onClick={() => deleteTransaction(index)}>Delete</div>
                                </li>
                            )
                        })
                    }

                        {
                                deposits.map((deposit, index) => (
                                <li key={deposit.id} className="flex justify-between p-5 bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl mb-5">
                                    <div>{deposit.name}</div>
                                    <div>-${deposit.amount}</div>
                                    <div className="text-red-400" onClick={() => deleteDeposit(index)}>Delete</div>
                                </li>
                            ))
                        }
                </ul>
            </div>
            </div>
        </>
    )
}