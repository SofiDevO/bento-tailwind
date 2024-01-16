

export  const Bento = ()=>{
    return(
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4 px-5 ">
  {[...Array(7)].map((_, i) => (
    <div
      key={i}
      className={`gap-4 h-{90dvh} overflow-hidden row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-0 dark:bg-neutral-900  ${
        i === 3 || i === 6 ? "col-span-2" : ""
      }`}
    >
        <h3 className="text-center mb-5  text-2xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Bento Grid</h3>
        <img className="self-center	 object-cover h-60 w-full md:w-full lg:w-full lg:h-full " src="../../public/img/9.png" alt="img" />
    </div>
  ))}
</div>
    )
}
