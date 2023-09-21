import { GoPencil, GoCheckCircle, GoClockFill } from 'react-icons/go';

function Task(props) {

    return (
        <div className="last:mb-24 first:mt-36 w-11/12 h-16 rounded-md mx-auto mb-5 px-6 shadow-lg flex align-center justify-between bg-violet-200">
            <div className="my-auto">
                <span><GoClockFill className='text-violet-800 inline mr-2 text-xl' /></span>
                <span className="font-semibold text-gray-700">{props.value}</span>
            </div>
            <div className="my-auto text-xl">
                <button className="mr-3"><GoPencil className='text-violet-800 hover:text-violet-500' /></button>
                <button><GoCheckCircle className='text-violet-800 hover:text-violet-500' /></button>
            </div>
        </div>
    )
}

export default Task;
