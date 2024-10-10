import { Element } from "react-scroll";
import { useState, useRef } from "react";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";
import { Collapse } from "react-collapse";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  const [showMore, setShowMore] = useState(false); // To control show more/less state
  const faqRef = useRef(null); // Reference to the FAQ section

  const handleShowMore = () => {
    setShowMore((prevShowMore) => {
      if (prevShowMore) {
        // Scroll to the top of the FAQ section when hiding
        faqRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return !prevShowMore;
    });
  };

  return (
    <section ref={faqRef}>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            {/* First Half of the FAQ */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Second Half for larger screens (visible) */}
            <div className="relative flex-1 lg:pt-24 max-lg:hidden">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>

            {/* Second Half for mobile view (toggle based on showMore) */}
            <div className="relative flex-1 lg:hidden">
              <Collapse isOpened={showMore}>
                {faq.slice(halfLength).map((item, index) => (
                  <FaqItem key={item.id} item={item} index={halfLength + index} />
                ))}
              </Collapse>
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>

        {/* Show More/Less Button for Mobile View Only */}
        <div className="text-center mt-8 lg:hidden">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-s2 text-white rounded-lg hover:bg-s3 hover:scale-105 transition-transform duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
