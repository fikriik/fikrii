import React from 'react'

const Ngerep = () => {
    return (
        <div>
            <div className="relative">
                <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                    <source src="/images/cannon.mp4" type="video/mp4" />
                </video>
                <div
                className="relative z-10 bg-cover bg-no-repeat bg-center p-1 py-10 md:py-[400px]">

                </div>
            </div>
        </div>
    )
}
export default Ngerep