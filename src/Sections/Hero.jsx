import ReactTypingEffect from "react-typing-effect";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            {/* ReactTypingEffect for dynamic typing */}
            <h2 className="mb-6 h2 text-p4 uppercase " style={{ display: "inline-block" }}>
              <span><ReactTypingEffect
                text={[
                  "INNOVATIVE SOLUTIONS",
                  "EFFORTLESS DEVELOPMENT",
                  "CREATIVE PROJECTS",
                  "CUTTING-EDGE TECHNOLOGY"
                ]}
                speed={120}  // Typing speed in milliseconds
                eraseSpeed={50}  // Erasing speed in milliseconds
                typingDelay={500}  // Delay before typing starts
                eraseDelay={3000} 
                cursorClassName="cursor-style" 
              />
              </span>
            </h2>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-xs">
              At DevLaunch, we turn innovative ideas into reality through efficient development processes.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">START BUILDING</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.svg"
              className="size-[300px] h-auto lg:w-[1000px]"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
