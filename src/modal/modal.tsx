import ReactDOM from "react-dom";
import React from "react";
import Modal, { ModalProvider } from "styled-react-modal";
import FocusLock from "react-focus-lock"; // Add the import statement for react-focus-lock
import { NameAndAmountDataContext } from "@/add/nameAndAmountData";
import { useContext, useRef } from "react";
import DarkMode from "@/app/darkmode/darkmode";
import { v4 as uuidv4 } from 'uuid';

const StyledModal = Modal.styled`
  width: 25rem;
  height: 25rem;
  display: flex;
    align-items: center;
    justify-content: space-around;
  background-color: white;
  transition : all 0.3s ease-in-out;`;

export function ExpenseModal({ toggleModal, isOpen}: {toggleModal: () => void, isOpen: boolean}){

  const { addTransaction } = useContext(NameAndAmountDataContext);

  const nameRef = useRef<HTMLInputElement>();
  const amountRef = useRef<HTMLInputElement>();

  const onClickAdd = () => {
    const name: string = nameRef.current?.value ?? ''; // Add null check for nameRef.current
    const amount: number = Number(amountRef.current?.value ?? 0) ?? 0;
    const id = uuidv4()
    addTransaction({ id, name, amount });
    toggleModal();
  }  

  return (
    <>
      <button className="text-3xl"onClick={toggleModal}>+</button>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
            <div className="ml-7">
            <h3 id="expense"className="text-2xl p-5 ml-14">New Expense</h3>
                <div className="mt-6">
                    <input type="text" className="w-80 p-2 m-2 border-2 border-slate-400 rounded-md" placeholder="Enter Transaction Name" ref={nameRef} />
                    <input type="number" className="w-80 p-2 m-2 border-2 border-slate-400 rounded-md" placeholder="Enter Transaction Amount" ref={amountRef} />
                </div>
                <div className="mt-14">
                    <button className="text-1xl bg-slate-400 rounded-md px-3 ml-5" onClick={toggleModal}>Cancel</button>
                    <button className="text-1xl ml-40 bg-blue-400 rounded-md px-3"  onClick={onClickAdd} id="add-expense">Add</button>
                </div>
            </div>
        </FocusLock>
      </StyledModal>
    </>
  );
}
export function DepositModal({ toggleModal, isOpen }) {
  const { addDeposit } = useContext(NameAndAmountDataContext);
  const nameRef = useRef();
  const amountRef = useRef();

  const onClickAddDeposit = () => { 
    const name = nameRef.current?.value;
    const amount = amountRef.current?.value;
    addDeposit({ name, amount }); 
    toggleModal();
  }
  
    return (
      <>
        <button className="text-3xl"onClick={toggleModal}>+</button>
        <StyledModal
          isOpen={isOpen}
          onEscapeKeydown={toggleModal}
          role="dialog"
          aria-modal={true}
          aria-labelledby="modal-label"
        >
          <FocusLock>
              <div className="ml-7">
              <h3 id="deposit"className="text-2xl p-5 ml-14">New Deposit</h3>
                  <div className="mt-6">
                      <input id="deposit-transation-name"type="text" className="w-80 p-2 m-2 border-2 border-slate-400 rounded-md" placeholder="Enter Transaction Name" ref={nameRef}/>
                      <input id="deposit-transation-amount"type="number" className="w-80 p-2 m-2 border-2 border-slate-400 rounded-md" placeholder="Enter Transaction Amount" ref={amountRef}/>
                  </div>
                  <div className="mt-14">
                      <button className="text-1xl bg-slate-400 rounded-md px-3 ml-5" onClick={toggleModal}>Cancel</button>
                      <button className="text-1xl ml-40 bg-blue-400 rounded-md px-3" onClick={onClickAddDeposit} id="add-deposit">Add</button>
                  </div>
              </div>
          </FocusLock>
        </StyledModal>
      </>
    );
}
