import React from 'react';
import './fragStyles/Button.css';

const Button = (props) => {

    const gotoLink = ()=>{
        window.open(props.link, "_blank");
    }
    return (
        <div id='lets' className='relative w-45'>
            <button onClick={gotoLink} className='w-full max-md:w-30 text-sm max-md:text-xs h-10 rounded-lg absolute !text-gray-800 !p-2 font-semibold flex items-center justify-center cursor-pointer'>
                {props.btn}
            </button>
            <div className="w-45 max-md:w-30 h-10 rounded-lg -z-10 bg-gradient-to-l from-indigo-500/80 from-10% via-sky-500/80 via-30% to-emerald-500/80 to-90%"></div>
        </div>
    );
}

export default Button;
