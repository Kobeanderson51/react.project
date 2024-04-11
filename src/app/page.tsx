"use client"
import { ModalProvider } from "styled-react-modal";
import Header from "../header/header.js";
import History from "../history/history";
import Add from "../add/add";
import { moneyRecord } from './types';
import NameAndAmountData from '@/add/nameAndAmountData';
import useLocalStorage from 'use-local-storage';
import DarkModeSwitch from "@/header/darkmode";

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
          deposits,
          deleteDeposit,
          deleteTransaction
      };

  

  return (
    <>
      <title>Budget Tracker</title>
    <NameAndAmountData value={value}>
      <ModalProvider>      
          <DarkModeSwitch />
          <Header />
          <History />
          <Add />
      </ModalProvider>
      </NameAndAmountData>
      </>
  );
}
