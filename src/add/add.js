export default function Add() {
    return (
        <div className="flex flex-col items-center p-10">
            <h3 className="text-3xl border-b-4 border-slate-300 p-5">Add New Transaction</h3>
            <form className="flex flex-col w-96 p-5">
                <label>Description</label>
                <input type="text" id="description" className="p-2 mb-5" />
                <label>Amount</label>
                <input type="number" id="amount" className="p-2 mb-5" />
                <button className="bg-slate-300 p-2 text-white">Add Transaction</button>
            </form>
        </div>
    )
}