import { useState } from 'react';
import {ExpenseModal} from "../modal/modal"
import NameAndAmountData from "./nameAndAmountData.jsx"
import {DepositModal} from "../modal/modal"

export default function Add() {

    const [depositisOpen, setdepositisOpen] = useState(false);
    const [expenseisOpen, setexpenseisOpen] = useState(false);

    function toggleDeposit() {
        console.log('toggling modal!')
        setdepositisOpen(!depositisOpen);
    }
    function toggleExpense() {
        console.log('toggling modal!')
        setexpenseisOpen(!expenseisOpen);
    }



    return (
        <div className="-mt-20">
            <div className="flex justify-center">
                <div className="flex justify-center pr-4 bg-slate-10 shadow-md shadow-slate-400 hover:shadow-2xl rounded-md">
                    <h3 className="text-2xl p-5">Add Expense</h3>
                    
                    <DepositModal isOpen={depositisOpen} toggleModal={toggleDeposit} />
                </div>
            </div>

            <div className="flex justify-center m-10">
                <div className="flex justify-center pr-4 bg-slate-10 shadow-md shadow-slate-400 hover:shadow-2xl rounded-md">
                    <h3 className="text-2xl p-5">Add Deposit</h3>
                    <ExpenseModal isOpen={expenseisOpen} toggleModal={toggleExpense} />
                </div>
            </div>
            
        </div>
    )
}



