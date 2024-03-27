


export default function History() {
    return (
        <>
        <div className="flex justify-center mt-10">
        <h3 className="text-3xl">Transactions</h3>
        </div>
        <div className="mb-5 h-3/4">
            <div className="flex flex-col items-center p-10 overflow-y-scroll h-3/4">
                <ul className="w-96 h-2/3 p-5">
                    <li className="flex justify-between p-5 bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl mb-5">
                        <div>Income 1</div>
                        <div>+500</div>
                        <div className="text-red-400">Delete</div>
                    </li>
                    <li className="flex justify-between p-5 bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl mb-5">
                        <div>Income 1</div>
                        <div>+500</div>
                        <div className="text-red-400">Delete</div>
                    </li>     
                </ul>
            </div>
            </div>
        </>
    )
}