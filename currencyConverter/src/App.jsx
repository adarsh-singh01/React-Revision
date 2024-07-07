import { useState } from "react"
import { InputBox } from "./components"//yaha index.js likhne ki bhi zarurat nhi h
import useCurrencyInfo from "./customHook"
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)//wo jo array aaya h uske keys humare pass aa jayenge..use show kr denge

  const swap=()=>{
    setFrom(to)
    setTo(from)
     
  }
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://fastly.picsum.photos/id/186/1280/720.jpg?hmac=xEuVjDB1Rja4auGWjHmuNA_EX0LoNWW3CDuIBxpWt-Y')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                           amount={amount}
                           onAmountChange={(amount)=>setAmount(amount)}
                           currencyOptions={options} 
                           onCurrencyChange={(curren)=>setAmount(amount)}
                           selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={(amount)=>setAmount(amount)}
                           currencyOptions={options} 
                           onCurrencyChange={(curren)=>setTo(curren)}
                           selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
