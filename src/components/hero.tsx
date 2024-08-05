function Hero() {
  return (
    <>
      <div className="flex items-center justify-center gap-40 h-[calc(100vh-112px)]">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-5xl">Hi, I'm Theo</h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-ecru to-garnet bg-clip-text text-[transparent] inline-block">
            Cooper-Brown
          </h1>
          <p>I'm a full stack developer.</p>
          <button className="bg-celadon rounded-lg w-fit p-2">
            Get In Touch
          </button>
        </div>
        <img src="/assets/hero/heroImage.png" className="h-4/6" />
      </div>
    </>
  );
}

export default Hero;
