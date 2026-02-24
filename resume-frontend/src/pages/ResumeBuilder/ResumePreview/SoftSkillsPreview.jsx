

const SoftSkillsPreview = ({softSkillsData}) => {

    return (
        <div className="w-full">
            <h2 className="text-base md:text-xl font-bold text-blue-950 mb-2 md:mb-4">Personal Skills:</h2>

            <ul className="w-full flex flex-col justify-center items-start flex-wrap ml-3 md:ml-5">
                {softSkillsData.map(each => (
                    <li className="w-[95%] md:w-[90%] text-black text-xs md:text-base font-normal list-disc ml-4 ">
                    {each}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default SoftSkillsPreview