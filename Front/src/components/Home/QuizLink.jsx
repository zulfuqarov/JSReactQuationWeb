import React from 'react'
import { Link } from 'react-router-dom'


const QuizLink = () => {
    return (
        <div className='pt-[80px]'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex justify-center'>
                    <Link to="/Quations/Html">
                        <i className="text-orange-900 text-[250px] fa-brands fa-html5 hover:-translate-y-[30px] hover:text-orange-600 transition-all"></i>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link to="/Quations/Js">
                        <i className="text-yellow-900 text-[250px] fa-brands fa-node-js hover:-translate-y-[30px] hover:text-yellow-600 transition-all"></i>
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Link to="/Quations/Css">
                        <i className=" text-blue-900 text-[250px] fa-brands fa-css3-alt hover:-translate-y-[30px] hover:text-blue-600 transition-all"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuizLink 