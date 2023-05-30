import React, { useState } from 'react'
import ScrapPriceList from '../../components/ui/scrap/ScrapPriceList'

export default function PriceListPage() {
    const [price,setPrice] = useState(false)
    
    const changeComp = ()=>{
        setPrice(!price)
    }

  return (
    <div>
        <div className='flex items-center md:flex-row md:items-start justify-center py-4'>
            <div className='mx-2 bg-orange-300 w-[200px] text-center h-10' onClick={changeComp}><h1>Waste Price</h1></div>
            <div className='mx-2 bg-orange-300 w-[200px] text-center h-10' onClick={changeComp}><h1>Waste Price</h1></div>

        </div>
      
            <ScrapPriceList/>
            <ScrapPriceList/>
        

    </div>
  )
}
