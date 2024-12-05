import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -50,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref,{margin:"-100px"});

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
    //   whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on growing and developing my skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            assumenda quaerat a, eaque sit voluptas doloribus quos hic deleniti
            excepturi, quasi incidunt id earum labore, sint repellat minima?
            Sed, temporibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            assumenda quaerat a, eaque sit voluptas doloribus quos hic deleniti
            excepturi, quasi incidunt id earum labore, sint repellat minima?
            Sed, temporibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            assumenda quaerat a, eaque sit voluptas doloribus quos hic deleniti
            excepturi, quasi incidunt id earum labore, sint repellat minima?
            Sed, temporibus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            assumenda quaerat a, eaque sit voluptas doloribus quos hic deleniti
            excepturi, quasi incidunt id earum labore, sint repellat minima?
            Sed, temporibus!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
