"use client"
import { ModalProvider } from "styled-react-modal";
import Header from "../header/header.js";
import History from "../history/history.js";
import Add from "../add/add.js";

import { moneyRecord } from './types.js';
import NameAndAmountData from '@/add/nameAndAmountData.js';
import useLocalStorage from 'use-local-storage';



export default function Home() {
  // https://www.npmjs.com/package/use-local-storage
  const [transactions, setTransactions] = useLocalStorage<moneyRecord[]>("transactions", []);
  const [deposits, setDeposits] = useLocalStorage<moneyRecord[]>("deposits", []);
  
  const addTransaction = (transaction: moneyRecord): void => {
      setTransactions([...transactions, transaction]);
  }

  const deleteTransaction = (index: number): void => {
      const newTransactions = [...transactions];

      newTransactions.splice(index, 1);
      setTransactions(newTransactions);
  }

  const addDeposit = (deposit: moneyRecord): void => {
      setDeposits([...deposits, deposit]);
  }

              const deleteDeposit = (index: number): void => {
                  const newDeposits = [...deposits];

                  newDeposits.splice(index, 1);
                  setDeposits(newDeposits);
              }
      const value = {
          transactions,
          addDeposit,
          addTransaction,
          deleteDeposit,
          deleteTransaction
      };

  
  const a = 'a'
  return (
    <NameAndAmountData value={value}>
    <ModalProvider>
      <main className="flex flex-col">
        <Header />
        <History />
        <Add />
      </main>
    </ModalProvider>
    </NameAndAmountData>


  );
}
