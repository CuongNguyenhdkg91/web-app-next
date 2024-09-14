const PhieuBocTham = () => {
    
    const phieu = (number: number) => { return (
        <div className="h-[2.8cm] border-solid border-2 border-black w-full flex flex-col bg-[url('/logoTNTT.jpg')] bg-[length:25%] bg-[center_top_1rem] bg-no-repeat p-1">
        <div className="flex flex-col justify-between italic p-1 items-center">
            <p className="uppercase">Phiếu trúng thưởng </p>
        </div>
        <div className="grow flex flex-col justify-center items-center"> 
            <div className="text-6xl font-bold">
                {number}
            </div>
        </div>
    </div>
    )}

    const list = Array(200).fill(1)
    
    return(
        <div className="relative">
            <div className="w-[22.5cm] grid grid-cols-4 z-20">
                {list.map((item,index) => {
                    return(
                        phieu(index+1)
                    )
                })}
            </div>
        </div>
    )
}

export default PhieuBocTham