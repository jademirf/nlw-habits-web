
const weekdays = [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ]

export const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekdays.map((day, i) => (
          <div key={`${day}-${i}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
      </div>
    </div>
  )
}