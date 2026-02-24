import { Mail, Phone, Globe } from "lucide-react";



const PersonalPreview = ({personalData}) => {
    const {fullName, phone, email, urlType, url} = personalData

    const normalizeUrl = (url) => {
        if (!url) return "";
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <div className="w-full h-full">
            <h1 className="text-blue-950 text-lg md:text-2xl font-bold mb-2">{fullName || "You Full Name"} </h1>
            
            {/* Full Name */}
            <h3 className="text-black text-sm md:text-base font-medium mb-2">
                <span  className="text-blue-950 font-semibold mr-1">Phone: </span> {phone || "Your Phone Number"}
            </h3>

            {/* Email */}
            <h3 className="text-black text-sm md:text-base font-medium mb-2">
                <span className="text-blue-950 font-semibold mr-1">Email: </span> {email || "Your Email is Here"}
            </h3>

            <a href={normalizeUrl(url)} target="_blank"
             className="font-normal text-blue-500 text-sm md:text-base "><span className="text-blue-950 font-semibold">{urlType}: </span>{url}</a>

        </div>
    )
}

export default PersonalPreview