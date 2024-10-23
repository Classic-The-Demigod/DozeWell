import Header from "../components/Header"
import ArrowDown from '../assets/arrow.png'
import bg from '../assets/100vh-Bg.png'

const WakeUp = () => {
    return (
        <section className="md:px-[10vw] px-[15px] bg-hero-pattern h-full bg-no-repeat bg-center bg-cover">
            <Header />
            <div className="flex flex-col items-start justify-center gap-2 py-11">
                <h1 className="text-white font-bold capitalize text-2xl">Hello</h1>
                <h1 className="text-white font-bold capitalize text-2xl">Techthoth!</h1>
                <p className="font-bold text-white capitalize">welcome back!</p>
                {/* */}
            </div>

            <main className="w-full bg-purple-dozewell flex flex-col items-center justify-between py-11 px-5 md:flex md:flex-row">
                <aside className="md:w-3/5 w-full flex flex-col items-center justify-center">
                    <div className="flex w-full md:gap-3 items-center justify-between md:p-[10px] h-55px">
                        <h1 className="text-white font-bold text-[12px] md:text-xl capitalize">Set Wake up Alarm</h1>
                        <span className="flex items-center justify-center gap-3 h-[55px] bg-[#4B0082] px-2 md:px-[15px] text-white capitalize text-sm font-bold rounded-lg">
                            dance my tune
                            <img src={ArrowDown} alt="Arrow Down" className="sm:h-[15px] sm:w-[15px]" />
                        </span>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-dark-dozewell peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4B0082]"></div>
                        </label>
                    </div>

                    <div className="flex w-full gap-3 items-center justify-between p-[10px] h-55px">
                        <h1 className="text-white font-bold text-[12px] md:text-xl capitalize">Sleeping Environment</h1>
                        <span className="flex items-center justify-center gap-3 h-[55px] bg-[#4B0082] px-6 md:px-[15px] text-white capitalize text-sm font-bold rounded-lg">
                            Comfortable
                            <img src={ArrowDown} alt="Arrow Down" className="sm:h-[15px] sm:w-[15px]"/>
                        </span>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-dark-dozewell peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4B0082]"></div>
                        </label>
                    </div>

                    <div className="flex w-full gap-3 items-center justify-start p-[10px] h-55px">
                        <h1 className="text-white font-bold text-xl capitalize">Sleep Time</h1>
                        <span className="flex items-center justify-center gap-3 h-[55px] ml-14 md:ml-[343px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
                            23:10
                        </span>
                    </div>

                    <div className="flex w-full gap-3 items-center justify-start p-[10px] h-55px">
                        <h1 className="text-white font-bold text-xl capitalize">Sleep Time</h1>
                        <div className="flex items-center justify-center gap-4">
                            <span className="flex items-center justify-center gap-3 h-[55px] ml-md:[250px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
                                Monday
                            </span>
                            <span className="flex items-center justify-center gap-3 h-[55px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
                                6:30
                            </span>
                        </div>
                    </div>
                </aside>
                <div className="md:w-2/5 py-5 flex items-center justify-center flex-col gap-3">
                    <p className="capitalize text-2xl">Change Background Color</p>
                    <img src={bg} alt="img" className="h-[200px] w-[300px]"/>
                    <span className="flex items-center w-3/5 justify-between gap-3 h-[55px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
                            Comfortable
                            <img src={ArrowDown} alt="Arrow Down" />
                        </span>
                </div>
            </main>
        </section>
    )
}

export default WakeUp
