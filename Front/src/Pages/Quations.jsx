import React, { useContext } from 'react'
import QuattionsCart from '../components/Quations/QuattionsCart'
import { ContextQuations } from '../context/Context'
import Score from './Score'
const Quations = () => {

    const context = useContext(ContextQuations)



    return (
        <div className='h-[100vh]'>
            {/* {
                context.Modal ? <Score /> : <QuattionsCart />
            } */}
            <QuattionsCart />
        </div>
    )
}

export default Quations