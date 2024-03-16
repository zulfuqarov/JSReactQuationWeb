import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const ContextQuations = createContext()


const Context = ({ children }) => {
    const navigate = useNavigate();

    const [Data, setData] = useState([])
    const [Count, setCount] = useState(0)
    const [Score, setScore] = useState(0)
    const [Second, setSecond] = useState(30)
    const [Modal, setModal] = useState(false)

    // UsereTest result start
    const [SelectionAnswer, setSelectionAnswer] = useState([])
    // UsereTest result end


    const RandomAnswer = (arry) => {
        return [...arry].sort(() => Math.random() - 0.5)
    }

    const ResetAllData = () => {
        setData([])
        setSelectionAnswer([])
        setCount(0)
        setScore(0)
        setSecond(30)
        setModal(false)
    }

    const GetQuationsData = async (url) => {
        ResetAllData()
        const res = await axios.get(`http://localhost:5555/api/Quations/${url}`)
        console.log(res.data)
        const AllData = res.data.map((oneMap) => (
            {
                ...oneMap,
                AllAnswer: RandomAnswer([...oneMap.incorrect_answers, oneMap.correct_answer])
            }
        ))
        const RandomArrnQuations = RandomAnswer(AllData)
        setData(RandomArrnQuations)
    }

    const ClikQuations = async (e) => {
        const Check = e.target.value === Data[Count].correct_answer
        if (Check) {
            setScore(Score + 100)
        }
        setSelectionAnswer([...SelectionAnswer, e.target.value])
        setCount(Count + 1)
        setSecond(30)
        if (Count == (Data.length - 1)) {
            setModal(true)
            navigate('/Score');
        }
    }

    const Timer = () => {
        if (Data.length > 0) {
            if (Second > 0) {
                setSecond(Second - 1)
            }
            if (Second == 0 && Count < Data.length) {
                setCount(Count + 1)
                setSecond(30)
            } else if (Count >= (Data.length + 1)) {
                setModal(true)
                navigate('/Score');
            }
        } else {
            setSecond(30)
        }
    }



    return (
        <ContextQuations.Provider
            value={{
                Data,
                Count,
                Score,
                Second,
                Modal,
                SelectionAnswer,
                GetQuationsData,
                ClikQuations,
                Timer
            }}
        >
            {children}
        </ContextQuations.Provider>
    )
}

export default Context