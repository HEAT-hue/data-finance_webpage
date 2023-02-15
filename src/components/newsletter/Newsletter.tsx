// jshint esversion:6

function Newsletter() {
    return (
        <div className="w-full py-16 px-4 text-white bg-[#000300] ">
            <div className="max-w-[1240px] mx-auto grid  gap-6 lg:grid-cols-7 lg:gap-0">
                <div className="lg:col-span-4">
                    <h3 className="font-bold text-xl mb-1 sm:text-2xl md:text-3xl">Want tips & tricks to optimize your flow?</h3>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="lg:col-span-3">
                    <div className="flex flex-col items-start gap-3 w-full sm:flex-row">
                        <input className="p-3 w-full rounded-md text-black" type="text" id="input" placeholder="Enter Email" />
                        <button className='w-[200px] bg-[#00df9a] py-3 px-6 text-[#000300] font-bold cursor-pointer rounded-md md:mx-0'>Notify Me</button>
                    </div>
                    <p className="mt-2 text-sm">We care bout the protection of your data. Read our <span className="text-[#00df9a]"> Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    );
}

export { Newsletter }