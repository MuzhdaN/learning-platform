const Hero = ({
    title= 'Become Remarkable!',
    subtitle= 'Find the Perfect Course/Tutor for Your Learning Journey'
}) => {
  return (
    <section className='bg-violet-700 py-20 mb-5'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center text-white">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                    {title}
                </h1>
                <p className="my-4">{subtitle}</p>
            </div>
        </div>
    </section>
  )
}

export default Hero