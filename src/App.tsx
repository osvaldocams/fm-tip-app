import { useState } from "react"
import Form from "./components/Form"
import Outputs from "./components/Outputs"


function App() {

	const [bill, setBill] = useState<number>(0)
	const [people, setPeople] = useState<number>(1)
	const [tip, setTip] = useState<number>(0)

	const restart = () =>{
        setBill(0)
		setPeople(1)
		setTip(0)
    }

	return (
    <div className="flex flex-col items-center">
		<div className="my-10">
			<img src="/logo.svg" alt="logo" />
		</div>
		<div className="bg-white w-full md:max-w-[900px] rounded-2xl p-7 md:grid md:grid-cols-2 md:gap-10">
			<Form
				bill={bill}
				setBill={setBill}
				people={people}
				setPeople={setPeople}
				setTip={setTip}
			/>
			<Outputs
				tip={tip}
				bill={bill}
				people={people}
				restart ={restart}
			/>
		</div>
	</div>
    
	)
}

export default App
