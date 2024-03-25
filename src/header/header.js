export default function Header() {
    return (
        <header>
            <div className="bg-red-400">
            
           <h1 className="text-3xl">Expense Tracker</h1>
           <h2>Your Balance</h2>
           <div></div>
              <div className="expense-container">
                <h3>INCOME</h3>
                <p className="income">+$0.00</p>
                </div>
                <div className="expense-container">
                <h3>EXPENSE</h3>
                <p className="expense">-$0.00</p>
                </div>
            </div>
        </header>
      
    )
}