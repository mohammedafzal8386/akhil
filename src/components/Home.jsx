import React from "react";
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider';
import 'react-simple-carousel-image-slider/dist/index.css';

const images = [
  require('../assets/images/banner01.png'),
  require('../assets/images/banner02.png')

];

const Home = ({ ratio }) => {
  return (
    <div id="home">
       <SimpleCarouselSlider
      images={images} 
      autoplay={false}
      width= "100%"
      height="650px"
      />

      {/* <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Abhishek Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>official.6packprogrammer@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
      <BsChevronDown /> */}
    </div>
  );
};


// const Home = ({ setMenuOpen, menuOpen }) => {
//   return (
//     <>
//     <SimpleCarouselSlider
//       images={images} 
//       autoplay={false}
//       width= "100%"
//       height="450px"
//       />
//     </>
//   );
// };
export default Home;
