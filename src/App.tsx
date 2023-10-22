import ReactFullpage from "@fullpage/react-fullpage";
import Myself from "./assets/myself2.jpg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const skills = [
    {
      skillName: "HTML 5",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      skillName: "CSS",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      skillName: "Javascript",
      imageUrl:
        "https://logospng.org/download/javascript/logo-javascript-icon-1024.png",
    },
    {
      skillName: "Typescript",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
      skillName: "Tailwind css",
      imageUrl:
        "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    },
    {
      skillName: "React js",
      imageUrl:
        "https://nextsoftware.io/files/images/logos/main/reactjs-logo.png",
    },
    {
      skillName: "Redux",
      imageUrl:
        "https://cdn.freebiesupply.com/logos/large/2x/redux-logo-svg-vector.svg",
    },
    {
      skillName: "Next js",
      imageUrl:
        "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
    },
    {
      skillName: "Git & Github",
      imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      skillName: "Npm",
      imageUrl:
        "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
    },
  ];
  const projects = [
    {
      name: "Digi Hosein",
      link: "https://hoseinshopcartreact.netlify.app/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-trolley-2748734-2289777.png",
      technologies: "React.js - Redux toolkit - Tailwind",
      description: "dsadsadasas",
    },
    {
      name: "Music city",
      link: "https://hosein-music-city.netlify.app/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/boy-listening-music-2527775-2114678.png",
      technologies: "React.js - Redux toolkit - Tailwind",
      description: "",
    },
    {
      name: "Movie city",
      link: "https://movie-city-nextjs.netlify.app/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/movie-production-4991886-4159604.png?f=webp",
      technologies: "Next.js (SSG) - Tailwind",
      description: "",
    },
  ];
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      credits={{}}
      navigation
      onLeave={(_origin, destination) => {
        setCurrentPage(destination.index);
      }}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="w-full flex flex-col items-center justify-start transition-all">
                <div className="w-full h-screen lg:flex-row flex flex-col">
                  <div className="w-full lg:w-[50%] lg:h-full h-[35%] bg-primary relative">
                    <div className="lg:w-[28rem] hover:scale-105 ring-4 fadeShow1 ring-dark duration-300 lg:shadow-2xl lg:h-[28rem] rounded-full overflow-hidden absolute top-[8rem] right-0 lg:right-[-13.5rem] w-[12rem] h-[12rem]  lg:bottom-32 mb-auto mt-auto mr-auto ml-auto left-0 lg:mr-auto lg:ml-auto lg:left-auto bottom-0">
                      <img className="" src={Myself} alt="" />
                    </div>
                  </div>
                  <div className="w-full h-full  bg-dark flex justify-center items-center lg:pt-0 pt-8 text-secondary">
                    <div className="flex flex-col justify-center fadeShow2 items-center lg:items-start gap-2">
                      <p className="text-base lg:text-2xl">
                        Web Front end developer
                      </p>
                      <p className="text-3xl lg:text-5xl font-bold">
                        Hosein Mahmoudi
                      </p>
                      <p className="text-base lg:text-xl w-64 lg:w-96 flex flex-wrap">
                        I have been learning front-end for about a year and I
                        love my work ...
                      </p>
                      <p className="text-base lg:text-xl w-64 lg:w-96 flex flex-wrap">
                        I have been learning front-end for about a year and I
                        love my work ...
                      </p>
                      <div className="flex lg:flex-row lg:text-xl text-base flex-col justify-center items-center fadeShow3 gap-4 pt-4">
                        <button className="py-2 px-10  rounded-full text-neutral-300 border-2 border-neutral-600">
                          Download resume
                        </button>
                        <button className="py-2 px-10  bg-neutral-900 rounded-full">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="h-screen w-full relative bg-dark text-secondary flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-4 p-8">
                <div
                  className={`w-[80%] flex gap-4 absolute top-10 lg:top-16 right-0 left-0 mr-auto ml-auto ${
                    currentPage === 1 && "fadeShow1"
                  }`}
                >
                  <span className="h-2 w-full bg-primary rounded-full"></span>
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                </div>
                <div className="w-[80%]  lg:justify-between  lg:flex-row flex flex-col">
                  <img
                    className={`${
                      currentPage === 1 && "fadeShow2 infiniteAnimation"
                    } `}
                    src={
                      "https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-programming-opening-multi-working-tabs-on-the-desktop-2381447-1997255.png"
                    }
                    alt=""
                  />
                  <div
                    className={`${
                      currentPage === 1 && "fadeShow3"
                    } flex flex-col items-center lg:items-start justify-center gap-3`}
                  >
                    <p className="lg:text-5xl text-4xl text-primary">
                      Who i am !?
                    </p>
                    <p className="text-lg lg:w-[40rem]">
                      My name's Jane. I'm a web designer and developer based in
                      Southampton, UK. During the day I work as a lead developer
                      at a local agency and in the evening I work on freelance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="flex h-screen lg:flex-row flex-col justify-between items-center">
                <div className="h-full w-full relative order-1 lg:order-none lg:w-[70%] bg-dark text-secondary flex flex-col lg:flex-row justify-start items-center gap-4">
                  <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
                    <div className="flex flex-col justify-center items-center gap-4 pt-28">
                      <img
                        className={`lg:block w-[15rem] lg:w-[30rem] absolute top-[-10rem] lg:bottom-0 lg:mt-auto lg:mb-auto right-0 lg:right-[-16rem] left-0 ml-auto mr-auto ${
                          currentPage === 2 && "fadeShow2"
                        }`}
                        src="https://cdni.iconscout.com/illustration/premium/thumb/male-developer-working-on-project-6992637-5699686.png?f=webp"
                        alt=""
                      />
                      <p
                        className={`text-3xl lg:text-4xl  ${
                          currentPage === 2 && "fadeShow2"
                        }`}
                      >
                        My Skills
                      </p>
                    </div>
                    <Swiper
                      simulateTouch={false}
                      allowTouchMove={false}
                      slidesPerView={window.innerWidth < 1024 ? 2 : 5}
                      spaceBetween={30}
                      loop={true}
                      slideToClickedSlide
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        reverseDirection: false,
                      }}
                      modules={[Autoplay]}
                      className={`${
                        currentPage === 2 && "fadeShow3"
                      } mySwiper w-full lg:h-[13rem] lg:w-[70%] h-[12rem] pt-8 lg:border-x-2 border-x-primary rounded-lg lg:p-4`}
                    >
                      {skills.map((item) => {
                        return (
                          <SwiperSlide
                            key={item.imageUrl}
                            className="flex w-full h-full flex-col justify-around items-center gap-6"
                          >
                            <img
                              className="w-[55%] skillImageAnimation"
                              src={item.imageUrl}
                              alt=""
                            />
                            <p className="text-xl flex h-full items-end">
                              {item.skillName}
                            </p>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div className="h-[40%] lg:h-full w-full bg-primary"></div>
              </div>
            </div>
            <div className="section">
              <div className="w-full h-screen bg-dark flex flex-col justify-start lg:justify-center items-center p-4 text-secondary transition-all">
                <div className="w-full lg:w-3/4 flex justify-center items-center">
                  <div className="w-full flex flex-col justify-center items-center lg:gap-8 gap-1">
                    <p className="text-secondary text-2xl lg:text-5xl">
                      Projects
                    </p>
                    <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-2 lg:gap-8">
                      {projects.map((item) => {
                        return (
                          <a
                            key={item.imageUrl}
                            href={item.link}
                            target="blank"
                            className="relative group/container w-full h-48 lg:w-80 lg:h-96 hover:translate-y-[-1rem] hover:scale-105 duration-200 lg:cursor-pointer rounded-md bg-primary text-white flex flex-col justify-between items-center p-4"
                          >
                            <div className="flex flex-row items-center justify-between w-full lg:flex-col">
                              <p className="text-xl lg:text-3xl">{item.name}</p>
                              <img
                                className="group-hover/container:opacity-50 duration-200 lg:w-auto w-[12rem] "
                                src={item.imageUrl}
                                alt=""
                              />
                            </div>
                            <p className="w-[95%] rounded-2xl text-center absolute bottom-2 lg:bottom-auto lg:relative lg:text-base   border border-secondary lg:rounded-full text-white p-1 ">
                              {item.technologies}
                            </p>
                            <div className="absolute  opacity-0 top-16 right-0 p-4 bg-dark group-hover/container:scale-100 group-hover/container:opacity-100 duration-300">
                              {item.description}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <img
                    className="hidden lg:block"
                    src="https://cdni.iconscout.com/illustration/free/thumb/free-developer-team-2043022-1731280.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
