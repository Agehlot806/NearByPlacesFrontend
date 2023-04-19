import React, { Component } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import Particles from "react-tsparticles";

const particles = () => {

  // const particlesInit = (main) => {
  //     console.log(main);


  //   };

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };

  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (

    <>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          top:"dotted",
          fpsLimit: 200,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
          
              resize: true,
            },
            modes: {
              bubble: {
                distance: 500,
                duration: 4,
                opacity: 0.9,
                size: 30,
              },
              
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#b19cd9",
              distance: 200,
              enable: true,
              opacity: 0.1,
              width: 0.5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 700,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> */}
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        top:"dotted",
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
        
            resize: true,
          },
          modes: {
            bubble: {
              distance: 500,
              duration: 2,
              opacity: 1,
              size: 30,
            },
            
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#b19cd9",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 700,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </>

  )
}
export default particles;