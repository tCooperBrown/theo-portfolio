import heroImg from "/src/assets/hero/heroImage.png";

function Hero() {
  return (
    <div className="flex items-center max-lg:items-start sm:justify-center gap-10 max-md:flex-col-reverse max-sm:justify-end mb-32">
      <div className="flex flex-col sm:gap-4 max-sm:gap-0">
        <h1 className="font-black">Hi, I'm Theo</h1>
        <h1 className="font-bold bg-gradient-to-r from-ecru to-garnet bg-clip-text text-[transparent] inline-block max-sm:mb-3">
          Cooper-Brown
        </h1>
        <p className="max-sm:mb-7">
          A software developer with a particular interest in building robust
          backends and managing complex data in an efficient manner.
        </p>
        <a
          href="mailto:theo.cooperbrown@gmail.com"
          className="bg-celadon rounded-lg w-fit p-4 font-bold hover:bg-ecru"
        >
          Get In Touch
        </a>
      </div>
      <img
        src={heroImg}
        className={`w-[65%] self-center md:self-start md:w-[40%]`}
      />
    </div>
  );
}

export default Hero;
