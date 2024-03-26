export default function History() {
    return (
        <>
        <div className="flex flex-col items-center p-10">
            <h3 className="text-3xl border-b-4 border-slate-300 p-5">History</h3>
            <ul className="w-96 p-5">
                <li className="flex justify-between p-5 bg-slate-300 shadow-lg shadow-slate-400 hover:shadow-2xl">
                    <div>Income 1</div>
                    <div>+500</div>
                    <div className="text-red-400">Delete</div>
                </li>
            </ul>
        </div>
        </>
    )
}