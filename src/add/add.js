import { useState } from 'react'
import Modal from "../modal/modal.js"
import MyModal from "../modal/modal.js"

export default function Add() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(e) {
        console.log('toggling modal!')
      setIsOpen(!isOpen);
    }

    return (
    <div className="flex justify-center">
        <div className="flex justify-center pr-4 bg-slate-10 shadow-md shadow-slate-400 hover:shadow-2xl rounded-md">
            <h3 className="text-2xl p-5">Add New Transaction</h3>
            <MyModal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    </div>
    )
}