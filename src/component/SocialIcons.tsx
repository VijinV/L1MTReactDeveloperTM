import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa"


export const SocialIcons = () => {
    return (
        <div className="d-flex justify-content-center gap-3 mt-2">
            <div className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-primary p-3" >
                <FaGoogle className="cursor-pointer text-primary" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-primary p-3" >
                <FaFacebook className="cursor-pointer text-primary" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-primary p-3" >
                <FaLinkedin className="cursor-pointer text-primary" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-primary p-3" >
                <FaTwitter className="cursor-pointer text-primary" />
            </div>
        </div>
    )
}
