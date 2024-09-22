import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
    },
  },
};

export const AnimatedText = ({
  textArray,
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
  el: Wrapper = "p",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      {textArray && Array.isArray(textArray) ? (
        <>
          <span className="sr-only">
            {textArray.map(({ text }) => text).join(" ")}
          </span>
          <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { transition: { staggerChildren: 0.04 } },
              hidden: {},
            }}
            aria-hidden
          >
            {textArray.map(({ text, color }, index) => (
              <span className="inline-block" key={`${text}-${index}`}>
                {text?.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                    style={{ color }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.span>
        </>
      ) : null}
    </Wrapper>
  );
};
