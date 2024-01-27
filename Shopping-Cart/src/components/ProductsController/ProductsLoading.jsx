export function ProductsLoading () {
  return (
    <div className='grid gap-10 place-items-center grid-cols-responsive'>
        {
            Array.apply(null, Array(12)).map((x, index) => (
              <div key={index} className='flex relative flex-col justify-center gap-2 py-5 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
                <div className="h-[224px] w-[85%] bg-slate-400 rounded-lg mb-10 place-self-center" /> {/* This is the "img" */}
                <div className='w-[100px] h-[20px] bg-slate-400 rounded-lg' /> {/* This is the "title" */}
                <div className='w-[65px] h-[20px] font-bold rounded-lg bg-slate-400' /> {/* This is the "discount %" */}
                <div className="w-[100px] h-[20px] rounded-lg bg-slate-400" /> {/* This is the "rating" */}
                <div className='w-[120px] h-[20px] rounded-lg bg-slate-400' /> {/* This is the "price and the price with discount" */}
                <div className="w-full h-[52px] rounded-lg bg-slate-400" /> {/* This is the "addToCartButton" */}
                <div
                className="absolute text-2xl right-5 bottom-28"
                > {/* This is the "favButton" */}
                  <i className="text-slate-400 fa-solid fa-heart"></i>
                </div>
              </div>
            ))
        }
      </div>
  )
  // return (
  //       <div className='grid place-items-center'>
  //           <i className="text-2xl text-center animate-spin fa-solid fa-arrow-rotate-right"></i>
  //       </div>
  // )
}
