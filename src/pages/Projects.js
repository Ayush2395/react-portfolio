import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Projects() {
  const fadeIn = {
    hide: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "tween" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hide");
  }, [control, isInView]);
  return (
    <>
      <section ref={ref} id="projects" className="bg-warning">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main container"
        >
          <h1>Project section</h1>
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <FontAwesomeIcon
                className="fa-spin w-100 text-center mb-3"
                size="8x"
                icon="fa-solid fa-gear"
              />
              <h1 className="display-6 w-100 text-center">Under maintenance</h1>
              <h1 className="display-6 w-100 text-center">
                Sorry for inconvinient
              </h1>
            </div>
          </Container>
        </motion.div>
      </section>
    </>
  );
}
