import React, { Fragment } from 'react'
import PageHeader from '../../components/ui/PageHeader'
import PickupRequestForm from '../../components/ui/form/PickupForm'
const PickupPage = () => {
  return (
    <div>

    <PageHeader title="Request Pickup"/>
    <div className='w-[80%] m-auto  text-[#404a3d]'>
    <div className='md:ml-56'>

        <h1 className='font-mono font-light text-4xl'>Are you Interested in a Pickup?</h1>
        <p>Get tips and info on how to manage waste effectively and reduce environmental impact. 
Need more info? Call + 1- (246) 333-0088 to speak with a Wostin expert.</p>
    </div>
    </div>
<div className='w-[90%] m-auto'>
    
    <PickupRequestForm/>
</div>

    </div>
  )
}

export default PickupPage
