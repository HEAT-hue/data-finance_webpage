// jshint esversion:6
import laptop from "../../assets/laptop.jpg";
import { Button } from "../button";

function Analytics() {
    return (
        <div className="bg-white">
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 gap-y-8 md:grid-cols-2">
                <img className="w-[500px] mx-auto" src={laptop} alt="laptop image" />
                <div className="flex flex-col gap-[10px]">
                    <p className="uppercase text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Manage Data Analytics Centrally</h2>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?</p>
                    {/* <button className='w-[220px] mx-auto text-[#00df9a] py-2.5 px-12 bg-[#000300] font-bold cursor-pointer mt-4 rounded-md md:mx-0'>Get Started</button> */}
                    <Button size={'220px'} dark >Get Started</Button>
                </div>

            </div>
        </div>
    );
}

export { Analytics };