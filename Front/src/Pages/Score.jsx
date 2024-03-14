import React, { useContext } from 'react';
import { ContextQuations } from '../context/Context';

const Score = () => {
    const context = useContext(ContextQuations);

    return (
        <div className='w-full h-[100%] flex flex-col justify-center items-center QuationsBgFon pb-[50px]'>
            <div className='flex pt-[50px]'>
                <h1 className='text-white text-[32px] font-bold pr-[20px]'>Nəticə:</h1>
                <p className='text-white text-[32px] font-bold'>{context.Score} Xal</p>
            </div>
            <div>
                {context.Data.map((oneMap, index) => (
                    <div key={index}>
                        <div className='flex py-[30px]'>
                            <p className='pr-[20px] text-[22px] font-bold text-white'>{index + 1}</p>
                            <p className='text-[22px] font-bold text-white'>{oneMap.question}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            {oneMap.AllAnswer.map((oneMapAnswer, answerIndex) => (
                                <div key={answerIndex} className='flex justify-between'>
                                    <button
                                        className={`hover:bg-gray-200 rounded-xl transition-all bg-gray-500 w-full mx-[5px] my-[5px] h-[50px] p-[10px] text-[18px] font-bold text-black hover:text-black ${oneMapAnswer === oneMap.correct_answer ? '!text-green-500' : context.SelectionAnswer[index] === oneMapAnswer
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
            </div>
        </div>
    );
};

export default Score;
