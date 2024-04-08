import React from 'react';

import { type } from "os";
import { createContext } from "react";

import { moneyRecord } from "@/app/types";

export type NameAndAmountDataContextType = {
      transactions: moneyRecord[],
          addDeposit: (deposit: moneyRecord) => void,
        addTransaction: (transaction: moneyRecord) => void,
          deposits: moneyRecord[],
          deleteDeposit: (index: number) => void,
          deleteTransaction: (transaction: moneyRecord) => void,
}

export const NameAndAmountDataContext = createContext<NameAndAmountDataContextType>({
    transactions: [],
    addDeposit: (deposit: moneyRecord) => {},
    addTransaction: (transaction: moneyRecord) => {},
    deposits: [],
    deleteDeposit: (index: number) => {},
    deleteTransaction: (transaction: moneyRecord) => {},
});

export default function NameAndAmountData({ children, value }: { children: any[], value: NameAndAmountDataContextType}) {
  return <NameAndAmountDataContext.Provider value={value} >{children}</NameAndAmountDataContext.Provider>;
}