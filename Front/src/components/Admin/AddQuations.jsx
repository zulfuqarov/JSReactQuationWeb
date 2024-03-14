import React, { useState } from 'react'
import axios from 'axios'

const AddQuations = () => {

    const [Data, setData] = useState({
        category: '',
        question: '',
        correct_answer: '',
        incorrect_answers: []
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        if (name === "incorrect_answers") {
            setData({
                ...Data,
                [name]: [...Data.incorrect_answers, value]
            })

        } else {
            setData({
                ...Data,
                [name]: value,
            })
        }
    }

    const AddAnswer = async () => {
        try {
            const res = await axios.post('http://localhost:5555/api/Quations/AddQuations', Data)
            setData({
                category: '',
                question: '',
                correct_answer: '',
                incorrect_answers: []
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='w-full h-[100%] flex flex-col justify-center items-center py-[50px]'>
            <div className='flex w-[500px] flex-col rounded-xl border-solid border-2 border-gray-600 p-[10px]'>
                <label className='text-center text-[22px] pb-[20px]' htmlFor="">Sual</label>
                <input onChange={onChangeInput} name="question" value={Data.question} type="text" placeholder='Sual' className='text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600' />
            </div>
            <div className='flex w-[500px] flex-col rounded-xl border-solid border-2 border-gray-600 p-[10px] mt-[20px]'>
                <label className='text-center text-[22px] pb-[20px]' htmlFor="">Kateqoriya Seçin</label>
                <select
                    name="category"
                    value={Data.category}
                    onChange={onChangeInput}
                    className='text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600'
                >
                    <option disabled value="">Kateqoriya Seçin</option>
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="Js">Js</option>
                </select>
            </div>
            <div className='flex w-[500px] flex-col rounded-xl border-solid border-2 border-gray-600 p-[10px] mt-[20px]'>
                <label className='text-center text-[22px] pb-[20px]' htmlFor="">Düzgün Cavab</label>
                <input onChange={onChangeInput} name="correct_answer" value={Data.correct_answer} type="text" placeholder='Cavab' className='text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600' />
            </div>
            <div className='flex w-[500px] flex-col rounded-xl border-solid border-2 border-gray-600 p-[10px] mt-[20px]'>
                <label className='text-center text-[22px] pb-[20px]' htmlFor="">Yanlış Cavab</label>
                <input onChange={onChangeInput} name="incorrect_answers" type="text" placeholder='Yanlış Cavab' className='mt-[5px] text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600' />
                <input onChange={onChangeInput} name="incorrect_answers" type="text" placeholder='Yanlış Cavab' className='mt-[5px] text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600' />
                <input onChange={onChangeInput} name="incorrect_answers" type="text" placeholder='Yanlış Cavab' className='mt-[5px] text-center text-[22px] p-[10px] rounded-xl border-solid border-2 border-gray-600' />
            </div>

            <button onClick={AddAnswer} className='mt-[30px] text-[22px] border-solid border-2 border-gray-600 p-[10px] rounded-xl w-[200px]' >Suall Əlavə Et</button>

        </div>
    )
}

export default AddQuations