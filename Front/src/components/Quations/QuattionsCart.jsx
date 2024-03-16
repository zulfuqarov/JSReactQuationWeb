import React, { useContext, useEffect } from 'react'
import { ContextQuations, } from "../../context/Context"
import { useParams } from 'react-router-dom'

const QuattionsCart = () => {
    const { name } = useParams()
    const context = useContext(ContextQuations)

    useEffect(() => {
        context.GetQuationsData(name)
    }, [])

    useEffect(() => {
        const upDateTimer = setInterval(() => {
            context.Timer()
        }, 1000)
        return () => clearInterval(upDateTimer);
    }, [context.Second, context.Data])


    if (context.Data.length > 0) {
        return (

            <div className='w-full h-[100vh] flex flex-col justify-center items-center QuationsBgFon'>
                <div className='BgGlassEfect py-[50px] px-[50px] rounded-xl'>
                    <div className='flex justify-center items-center bg-black rounded-[50px] w-[50px] h-[50px]'>
                        <p className='text-white text-[22px] font-semibold'>{context.Second}</p>
                    </div>
                    <div>
                        <div className='flex py-[30px]'>
                            <p className='pr-[20px] text-[22px] font-bold'>{context.Count + 1}</p>
                            <p className='text-[22px] font-bold '>{context.Data[context.Count].question}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            {
                                context.Data[context.Count].AllAnswer.map((oneMap, index) => (
                                    <div key={index} className='flex justify-between'>
                                        <button onClick={context.ClikQuations} value={oneMap} className='hover:bg-gray-200 rounded-xl transition-all bg-gray-500 w-full mx-[5px] my-[5px] h-auto p-[10px] text-[18px] font-bold text-white hover:text-black'>{oneMap}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div></div>
            </div>

        )
    } else {
        return (
            <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
                <div className="flex items-center justify-center">
                    <div
                        className="inline-block h-[100px] w-[100px] animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </div>
            </div>
        )
    }


}

export default QuattionsCart