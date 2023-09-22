import { useEffect, useState } from 'react';
import { GoPencil, GoCheckCircle, GoCheckCircleFill, GoTrash } from 'react-icons/go';

function Task(props) {
    const [Data, setData] = useState();
    const [status, setStatus] = useState(props.data.status);

    const getData = async() => {
        let store = await JSON.parse(localStorage.getItem('toDo'))
        setData(store)
    } 

    useEffect(() => {
        getData()
    }, [])
    
    function changeIcone() {
        console.log(status);
        let itemData = Data?.filter(item => {
            if (item.id === props.data.id) {
                item.status = !item.status
                setStatus(item.status)
            }
            return {...item}
        })

        localStorage.setItem('toDo', JSON.stringify(itemData))
}

    return (
        <div className="last:mb-24 first:mt-36 w-11/12 h-16 rounded-md mx-auto mb-5 px-6 shadow-lg flex align-center justify-between bg-violet-200">
            <div 
                onClick={ changeIcone }
                className="my-auto cursor-pointer"
            >
                {
                    !status ? 
                    <span><GoCheckCircle className='text-violet-800 inline mr-2 text-xl' /></span> :
                    <span><GoCheckCircleFill className='text-violet-800 inline mr-2 text-xl' /></span>
                }
                <span className="font-semibold text-gray-700">{props.data.value}</span>
            </div>
            <div className="my-auto text-xl">
                <button className="mr-3"><GoPencil className='text-violet-800 hover:text-violet-500' /></button>
                <button><GoTrash className='text-violet-800 hover:text-violet-500' /></button>
            </div>
        </div>
    )
}

export default Task;
