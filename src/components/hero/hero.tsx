import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="sm:items-center sm:justify-center sm:gap-40 h-full flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-end pt-12 max-sm:gap-20">
      <div className="flex flex-col sm:gap-4 max-sm:gap-2">
        <h1 className="font-black sm:text-5xl">Hi, I'm Theo</h1>
        <h1 className="sm:text-5xl font-bold bg-gradient-to-r from-ecru to-garnet bg-clip-text text-[transparent] inline-block">
          Cooper-Brown
        </h1>
        <p>I'm a full stack developer.</p>
        <button className="bg-celadon rounded-lg w-fit p-2">
          Get In Touch
        </button>
      </div>
      <img src="/assets/hero/heroImage.png" className={styles.heroImg} />
    </div>
  );
}

export default Hero;
