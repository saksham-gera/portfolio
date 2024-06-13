import { motion } from "framer-motion";
import './hero.css';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, linkedin } from "../assets";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Saksham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Aspiring software developer.
          </p>
          <div className="flex items-center mt-4">
            <a
              href={import.meta.env.VITE_APP_RESUME_LINK}
              target="/blank">
              <button className="hirebutton">Resume</button>
            </a>
            <div className='flex flex-col z-10 ml-2 rounded-full bg-[#915eff]'>
              <div
                onClick={() => window.open("https://www.github.com/saksham-gera", "_blank")}
                className='w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
              <div
                onClick={() => window.open("https://www.linkedin.com/in/saksham-gera/", "_blank")}
                className='w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={linkedin}
                  alt='linkedin'
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
