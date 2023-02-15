// jshint esversion:6
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa"

function Footer() {
    return (
        <div className="bg-black text-white py-16 px-4 max-w-[1240px] mx-auto">
            <div className="w-full grid grid-cols-1 gap-y-12 gap-x-4 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <h1 className="w-full text-3xl text-[#00df9a] font-bold">REACT.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                    <div className="flex gap-6 cursor-pointer">
                        <span><GrFacebook size={30} /></span>
                        <span><GrInstagram size={30} /></span>
                        <span><FaTwitterSquare size={30} /></span>
                        <span><FaGithubSquare size={30} /></span>
                    </div>
                </div>

                <div className="w-full grid grid-cols-4 gap-x-4 lg:justify-items-center">
                    <ul>
                        <li>
                            <h4 className="font-bold text-gray-400 text-lg mb-2">Solutions</h4>
                        </li>
                        <li className="mb-3 text-sm"><a href="#">Analytics</a></li>
                        <li className="mb-3 text-sm"><a href="#">Marketing</a></li>
                        <li className="mb-3 text-sm"><a href="#">Commerce</a></li>
                        <li className="mb-3 text-sm"><a href="#">Insights</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h4 className="font-bold text-gray-400 text-lg mb-2">Support</h4>
                        </li>
                        <li className="mb-3 text-sm"><a href="#">Pricing</a></li>
                        <li className="mb-3 text-sm"><a href="#">Documentation</a></li>
                        <li className="mb-3 text-sm"><a href="#">Guides</a></li>
                        <li className="mb-3 text-sm"><a href="#">API Status</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h4 className="font-bold text-gray-400 text-lg mb-2">Company</h4>
                        </li>
                        <li className="mb-3 text-sm"><a href="#">About</a></li>
                        <li className="mb-3 text-sm"><a href="#">Blog</a></li>
                        <li className="mb-3 text-sm"><a href="#">Jobs</a></li>
                        <li className="mb-3 text-sm"><a href="#">Press</a></li>
                        <li className="mb-3 text-sm"><a href="#">Careers</a></li>
                    </ul>
                    <ul>
                        <li>
                            <h4 className="font-bold text-gray-400 text-lg mb-2">Legal</h4>
                        </li>
                        <li className="mb-3 text-sm"><a href="#">Claim</a></li>
                        <li className="mb-3 text-sm"><a href="#">Policy</a></li>
                        <li className="mb-3 text-sm"><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export { Footer };