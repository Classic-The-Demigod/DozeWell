import sleepImage from "../assets/AuthBed.png"
import googleProviderImg from '../assets/devicon_google@2x.png'
import appleProviderImg from '../assets/mage_apple.png'
import Footer from "../components/Footer"
import Input from "../components/Input"
import MaskImage from '../assets/Mask group.png'
import SecondMaskImage from '../assets/SecondMaskgroup.png'
import lastMaskImag from '../assets/ishaseePhone.png'
const Auth = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-start bg-bg-primary h-fit">
                <header className="text-dozwell-green w-full text-left px-5 py-5 md:px-11 md:py-4 text-3xl font-bold">DozeWell</header>
                <div className="flex items-center justify-between w-full px-[5vw] py-10 gap-4">
                    {/* First Side Of Auth Hero */}
                    <aside className="flex w-full flex-col items-center justify-start md:w-1/2">
                        <h1 className="text-white font-bold text-3xl md:text-5xl capitalize">Join For Better Sleep</h1>
                        <p className="text-gray-light-dozewell font-extralight font-Satoshi md:text-2xl text-lg py-9 md:px-5 w-full text-center">Are you ready to take the next step to enhance a better
                            sleep experience? Look no further than
                            <span className="text-dozwell-green font-bold"> DozeWell!</span>
                        </p>

                        {/* SIGN UP CTAs */}
                        <div className="w-full items-center justify-center gap-7">
                            <button className="w-full h-[55px] rounded-lg bg-purple-dozewell text-gray-light-dozewell flex items-center justify-center gap-5 mt-5 text-lg capitalize
                ">
                                <img src={appleProviderImg} className="w-[24px] h-[23px]" alt="provider pics" />
                                continue with apple
                            </button>
                            <button className="w-full h-[55px] rounded-lg bg-purple-dozewell text-gray-light-dozewell flex items-center justify-center gap-5 mt-5 text-lg capitalize
                ">
                                <img src={googleProviderImg} className="w-[24px] h-[23px]" alt="provider pics" />
                                continue with google
                            </button>
                        </div>

                        {/* Or Line */}
                        <div className="flex w-full py-5 text-gray-light-dozewell mt-10 gap-4 items-center justify-center">
                            <hr className="w-full bg-white p-[1px]" />
                            Or
                            <hr className="w-full bg-white p-[1px]" />
                        </div>

                        {/* SIGN UP FORM */}

                        <form className="w-full flex flex-col items-center justify-center">
                            <div className="flex w-full justify-between items-center gap-10">
                                <Input inputName='firstName' inputType='text' inputPlaceholder='first name' />
                                <Input inputName='lastName' inputType='text' inputPlaceholder='last name' />
                            </div>
                            <Input inputName='email' inputType='email' inputPlaceholder='email' />
                            <Input inputName='password' inputType='password' inputPlaceholder='password' />

                            <div className="flex w-full items-center justify-center p-5">
                                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                <label htmlFor="link-checkbox" className="ms-2 text-sm font-light text-gray-light-dozewell">Yes, I agree and understand DozeWell Terms of Service.
                                </label>
                            </div>

                            <Input inputValue='Create an account' inputName='button' inputType='button' />

                            <div className="flex w-full items-center justify-start p-5">
                                <p className="text-gray-light-dozewell text-lg font-light">Already have an account? <span className="text-dozwell-green underline font-bold">Login</span></p>
                            </div>
                        </form>

                    </aside>

                    {/* Second Side Of Auth Hero */}
                    <main className="w-1/2 hidden items-center justify-center md:flex">
                        <img src={sleepImage} alt="sleeping boy" className="h-[550px] w-[550px]" />
                    </main>
                </div>

                <section className="">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full" src={MaskImage} alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-light-dozewell">Fall asleep with ease</h2>
                            <p className="mb-6 font-light text-gray-light-dozewell md:text-lg">DozeWell provides a comprehensive     collection   of calming sounds,
                                relaxation guides, and sleep stories, all crafted to help you
                                drift off to sleep more easily..
                            </p>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:flex-row-reverse sm:py-16 lg:px-6">
                        <img className="w-full" src={SecondMaskImage} alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-light-dozewell">Wake up felling rested</h2>
                            <p className="mb-6 font-light text-gray-light-dozewell md:text-lg">DozeWell smart alarm, together with its carefully designed alarm sounds, wakes
                                you up gently during your lightest sleep phase, helping you feel more
                                rested and recovered to face the day ahead.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full" src={lastMaskImag} alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-light-dozewell">Understand your sleep</h2>
                            <p className="mb-6 font-light text-gray-light-dozewell md:text-lg">While you are asleep, DozeWell uses it’s patented sound analysis
                                to map your sleep patterns and sleep environment. Find out
                                everything from how much sleep to how much you snore
                                or cough during the night.
                            </p>
                        </div>
                    </div>
                </section>
                {/* BOTTOM SIGN UP CTAs */}
                <div className="w-full block px-[20px] md:flex md:px-[10vw] py-6 items-center justify-center gap-7">
                    <button className="w-full h-[55px] rounded-lg bg-purple-dozewell text-gray-light-dozewell flex items-center justify-center gap-5 mt-5 text-lg capitalize
                ">
                        <img src={appleProviderImg} className="w-[24px] h-[23px]" alt="provider pics" />
                        continue with apple
                    </button>
                    <button className="w-full h-[55px] rounded-lg bg-purple-dozewell text-gray-light-dozewell flex items-center justify-center gap-5 mt-5 text-lg capitalize
                ">
                        <img src={googleProviderImg} className="w-[24px] h-[23px]" alt="provider pics" />
                        continue with google
                    </button>
                </div>
            </section>
            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default Auth
