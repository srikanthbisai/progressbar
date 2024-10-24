import { useEffect, useState } from "react"

function ProgressBar({value = 0}) {
   
   const [percent, setPercent] = useState(value); 
   useEffect(()=>{
    setPercent(Math.min(100, Math.max(value, 0)));
   }, [value]);

  return (
    <div className="relative font-serif flex flex-col items-center justify-center h-[20%] w-[500px] bg-gray-200 
    border border-neutral-400 rounded-full overflow-hidden">
      <span className="z-10" style={{text: percent > 49 ? "white" : "black"}}>{percent.toFixed()} %</span>
      <div role="progressbar" 
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent.toFixed()}
      className="absolute left-0 h-full w-[20%] bg-[#00c251]" 
      style={{width:`${percent}%`}}/>
    </div>
  )
}

export default ProgressBar
