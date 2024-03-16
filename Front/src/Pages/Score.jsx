import React, { useContext, useState } from 'react';
import { ContextQuations } from '../context/Context';

const Score = () => {
    const context = useContext(ContextQuations);

    const [ModalIndex, setModalIndex] = useState(null)
    const ShowModal = (index) => {
        setModalIndex(index)
    }
    const HiddenModal = () => {
        setModalIndex(null)
    }

    return (
        <div className='w-full h-[100%] flex flex-col justify-center items-center QuationsBgFon pb-[50px]'>
            <div className='flex pt-[50px]'>
                <h1 className='text-black text-[32px] font-bold pr-[20px]'>Nəticə:</h1>
                <p className='text-black text-[32px] font-bold'>{context.Score} Xal</p>
            </div>
            <div className='w-[70%] max-[768px]:w-[100%]  '>
                {context.Data.map((oneMap, index) => (
                    <div className='mt-[15px] BgGlassEfect p-[15px] rounded-xl' key={index}>
                        <div className='flex max-[768px]:flex-col justify-between py-[30px]'>
                            <div className='flex w-[70%] max-[768px]:w-[100%]'>
                                <p className='pr-[20px] text-[22px] font-bold text-black'>{index + 1}</p>
                                <p className='text-[22px] max-[768px]:text-[17px] font-bold text-black'>{oneMap.question}</p>
                            </div>
                            <div className='pr-[30px] max-[768px]:pt-[20px]'>
                                <button onClick={() => ShowModal(index)} ><i className="text-[28px] text-black hover:text-gray-500 transition-all fa-solid fa-question"></i></button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 max-[768px]:grid-cols-1'>
                            {oneMap.AllAnswer.map((oneMapAnswer, answerIndex) => (
                                <div key={answerIndex} className='flex justify-between'>
                                    <button
                                        className={`rounded-xl break-all	 bg-gray-500 hover:bg-gray-200 hover:text-black px-4 py-4 mx-[5px] my-[5px] text-white font-semibold text-[17px] w-full transition-all  overflow-auto whitespace-normal ${oneMapAnswer === oneMap.correct_answer ? '!text-green-500' : context.SelectionAnswer[index] === oneMapAnswer
                                            ? '!text-red-500'
                                            : ''
                                            }`}
                                    >
                                        {oneMapAnswer}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {
                    ModalIndex !== null ?
                        <div className='fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-600 flex justify-center items-center'>
                            <h1 className='absolute top-[50px] text-[60px] max-[768px]:text-[40px] text-white'>İzah</h1>
                            <button onClick={HiddenModal}><i className="text-[32px] max-[768px]:text-[28px] absolute  right-[50px] top-[50px] text-white hover:text-black transition-all fa-solid fa-xmark"></i></button>
                            <h1 className='text-white text-[32px] max-[768px]:text-[22px] text-center'>?</h1>
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default Score;
