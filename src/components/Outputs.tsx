import { useMemo } from "react"

type OutputsProps = {
    tip:number
    bill: number
    people: number
    restart: () => void
}
export default function Outputs({tip, bill, people, restart}: OutputsProps) {
    
    const totalAmount = useMemo(()=> bill * tip ,[bill, tip])
    const totalByPerson = useMemo(()=> totalAmount / people, [totalAmount,bill, people])

    return (
        <div className="bg-Verydarkcyan text-white mt-8 p-6 rounded-lg flex flex-col gap-6 md:mt-0">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-lg font-black">Tip Amount</p>
                    <span className="text-slate-300">/ person</span>
                </div>
                <p className="text-4xl text-strongCyan font-black">${totalByPerson}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-lg font-black">Total</p>
                    <span className="text-slate-300">/ person</span>
                </div>
                <p className="text-4xl text-strongCyan font-black">${totalAmount}</p>
            </div>
            <button 
                className="text-xl bg-strongCyan p-2 mt-6 rounded-lg text-Verydarkcyan font-extrabold uppercase md:mt-auto hover:bg-Lightgrayishcyan"
                onClick={restart}
            >
                Restart
            </button>
    
        </div>
    )
}
