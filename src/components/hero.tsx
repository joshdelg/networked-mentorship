import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bringing the networks of "I know a guy" to everyone</h1>
                <p className="mb-8 leading-relaxed">NetworkED is an unmatched peer-to-peer mentorship platform. Essay help, career advice, interview skills, passion projects all through a 1-on-1 meeting. Match using the power of AI to a college student just like you and ask them <b>anything.</b></p>
                <div className="flex w-full md:justify-start justify-center items-end">
                    <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                    <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Stay in the loop</label>
                    <input type="text" id="hero-field" name="hero-field" placeholder="Email" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
                </div>
                <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Be the first to gain access to this revolutionary platform.</p>
                <div className="flex lg:flex-row md:flex-col">
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    I'm a mentee
                    </button>
                    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                    I'm a mentor
                    </button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div>Image goes here</div>
                </div>
            </div>
        </section>
    )
}

export default Hero