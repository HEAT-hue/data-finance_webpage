// jshint esversion:6

import { Button } from "../button"

interface CardProp {
    img: string,
    darkTheme?: boolean,
    userType: string,
    price: string,
    storageCapacity: string,
    grantedUsers: number,
    sendAmount: string
}

function Card({ img, darkTheme, userType, price, storageCapacity, grantedUsers, sendAmount }: CardProp) {

    return (
        <div className={`relative w-full px-4 py-10 border shadow-md text-center cursor-pointer hover:shadow-2xl ${darkTheme ? 'bg-[#ece9e983]' : 'bg-white'}`}>
            <img className="w-[5rem] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]" src={img} alt="icon-image" />
            <h3 className="text-xl font-bold">{userType}</h3>
            <p className="font-bold text-4xl my-5">{price}</p>
            <div className="w-[70%] mx-auto">
                <div className="border-b border-b-[#dad5d5] py-2">{storageCapacity} Storage</div>
                <div className="border-b border-b-[#dad5d5] py-2">{grantedUsers} Granted User</div>
                <div className="border-b border-b-[#dad5d5] py-2">Send up to {sendAmount} GB</div>
            </div>
            {/* <button className={`w-[200px] ${darkTheme ? 'bg-black text-[#00df9a]' : 'bg-[#00df9a] text-[#000300]'} mt-8 py-3 px-6 font-bold cursor-pointer rounded-md md:mx-0 border shadow-sm`}>Notify Me</button> */}
            <Button size="200px" spacing='mt-8 py-3 px-6' dark={darkTheme} >Start Trial</Button>
        </div>
    );
}

export { Card };