import React, { useState } from 'react'
import ScrapPriceList from '../../components/ui/scrap/ScrapPriceList'
import WastePriceList from '../../components/ui/waste/WastePriceList'
import PageHeader from '../../components/ui/PageHeader'

export default function PriceListPage() {
    const [price,setPrice] = useState(false)
    
    const changeComp = ()=>{
        setPrice(true)
    }
    const changeCom = ()=>{
      setPrice(false)
  }

  return (

    <div>
      <PageHeader title="Price List"/>
        <div className='flex items-center md:flex-row md:items-start justify-center py-4'>
            <div className='mx-2 bg-orange-300 md:w-[400px] text-center h-10 hover:bg-[#538E4E] hover:text-white after:content-none after:w-[50px] after:h-[50px]'  onClick={changeComp}><h1>Scrap Price</h1></div>
            <div className='mx-2 bg-orange-300 md:w-[400px] text-center h-10 hover:bg-[#538E4E] hover:text-white ' onClick={changeCom}><h1>Waste Price</h1></div>

        </div>
      {
          price ?
        <ScrapPriceList/>:
          <WastePriceList/>
      }
        

    </div>
  )
}
