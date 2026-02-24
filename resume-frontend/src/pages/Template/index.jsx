import {useNavigate } from "react-router-dom"


const Template = () => {
    const navigation = useNavigate()

    const onBtn = () => {
        navigation("/", {replace:true})
    }

    return (
        <div className="h-screen w-screen bg-green-100 flex flex-col justify-center items-center">
            <button onClick={onBtn}
             className="text-4xl font-bold bg-linear-to-r from-green-600 to-green-300 bg-clip-text text-transparent">
                COMMING SOON</button>
        </div>
    )
}

export default Template