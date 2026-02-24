

const Personal = ({resumeData, setResumeData}) => {
        const {fullName, phone, email, urlType, url} = resumeData.personal // personal >> 
        
    // Personal  important >> 
    const handlePersonalDetails = (e) => {
        const {name, value} = e.target // name , value from input attributes >> imp

        setResumeData(prev => ({
            ...prev,
            personal:{
                ...prev.personal,
                [name] :value
            }
           
        }))    
    }

      return (   
        <div className="w-full flex flex-col justify-start items-start"> 
        <h1 className="text-base md:text-xl font-bold text-rose-900 tracking-wide mb-4">Personal Details:</h1>
                {/* Name */}
                <section className="w-full flex flex-col justify-start items-start mb-5">

                    <label htmlFor="fullName" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Full Name 
                        <span className="text-red-500"> *</span>
                    </label>

                    <input id="fullName" type="text" minLength={3} maxLength={60} required placeholder="Enter Your Full Name" 
                     value={fullName} name="fullName" onChange={handlePersonalDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>

                </section>

                {/* Phone Number */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="phone" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Phone
                        <span className="text-red-500"> *</span>
                    </label>
                    <input id="phone" type="tel" required placeholder="Enter Your Whats app Number" 
                     value={phone} name="phone" onChange={handlePersonalDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* Email */}
                <section className="w-full flex flex-col justify-start items-start mb-10">
                    <label htmlFor="email" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Email
                        <span className="text-red-500"> *</span>
                    </label>

                    <input id="email" type="email" required placeholder="Enter Your Email" 
                     value={email} name="email" onChange={handlePersonalDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>

                {/* URL TYPE */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                <label htmlFor="urlType" className="text-xs md:text-sm text-emerald-800 mb-1">Profile Type</label>
                <select value={urlType} id="urlType" name="urlType" onChange={handlePersonalDetails} 
                className="w-full bg-emerald-100 text-emerald-900 text-sm md:text-base  px-2 py-1 rounded-md border-2 border-emerald-50" >
                    <option value="Linkedin">
                        Linkedin
                    </option>
                    <option value="GitHub">
                        GitHub
                    </option >
                    <option value="HakerRank">
                        HakerRank
                    </option >
                    <option value="Portfolio">
                        Portfolio
                    </option >
                    <option value="Other">
                        other
                    </option>
                </select>
                </section>

                {/* URL */}
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <label htmlFor="url" className="text-sm md:text-lg font-bold text-emerald-800 mb-1">Profile Link
                        <span className="text-red-500"> *</span>
                    </label>
                    <input id="url" type="url"  required  placeholder="Enter your profile link Linkedin, Github, Portfolio or Other" 
                     value={url} name="url" onChange={handlePersonalDetails}
                    className="h-10 md:h-12 w-full text-sm md:text-base bg-emerald-100 px-4 py-2 rounded-lg outline-0 border-2 border-emerald-50 text-emerald-700
                    hover:border-emerald-600 transition-all duration-300"/>
                </section>
        </div>  
        )
}

export default Personal