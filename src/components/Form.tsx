import { Dispatch } from "react"
import { tipOptions } from "../data"

type FormProps = {
    bill:number
    setBill: Dispatch<React.SetStateAction<number>>
    people:number
    setPeople: Dispatch<React.SetStateAction<number>>
    setTip: Dispatch<React.SetStateAction<number>>
}
export default function Form({bill, setBill, people, setPeople, setTip}:FormProps) {

    const disabledOptions = () =>  bill === 0 || people <= 0 ? true : false

    return (
        <form className="flex flex-col gap-6 md:flex-1">
            <div className="flex flex-col">
                <span className="text-xl">Bill</span>
                <div className="relative">
                    <input 
                        className=" bg-Verylightgrayishcyan my-4 p-2 rounded-md text-right w-full focus:outline-strongCyan"
                        type="number"
                        value={bill}
                        onChange={(e)=>setBill(+e.target.value)}
                    />
                    <img src="/icon-dollar.svg" 
                        alt="icon"
                        className="absolute top-7 left-5"
                    />
                </div>
                
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-xl">Select Tip %</span>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-3">
                    {tipOptions.map(option =>(
                        <button 
                            className="bg-Verydarkcyan hover:bg-strongCyan hover:text-black text-white p-3 font-bold text-2xl border rounded-md disabled:opacity-5"
                            key={option.id}
                            disabled= {disabledOptions()}
                            value={option.value}
                            onClick={(e) => {
                                e.preventDefault()
                                setTip(option.value)}
                            } 
                        >{option.label}</button>
                    ))}
                    <input 
                        className="bg-Verydarkcyan hover:bg-Verylightgrayishcyan hover:text-black text-white p-3 focus:outline-strongCyan font-bold text-2xl border rounded-md placeholder:text-right " 
                        type="number" 
                        placeholder="Custom"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTip(+e.target.value/100)}
                        disabled= {disabledOptions()}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="text-xl">Number of People</span>
                    <span className={`text-xl text-red-500 hidden ${people <= 0 && 'active'}`}>Can't be zero</span>
                </div>
                <div className="relative">
                    <input 
                        className={`bg-Verylightgrayishcyan my-4 p-2 rounded-md text-right w-full ${people <= 0 && 'focus:outline-red-500'}`}
                        type="number"
                        value={people}
                        onChange={(e)=>setPeople(+e.target.value)}
                    />
                    <img src="/icon-person.svg" 
                        alt="icon"
                        className="absolute top-7 left-5"
                    />
                </div>
                
            </div>
        </form>
    )
}
