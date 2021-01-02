const particleParams = {
  background: {
    color: {
      value: "#121212",
    },
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    autoPlay: true,
    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: "",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#afafaf",
      opacity: 0.4,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.8,
        },
      },
      push: {
        particles_nb: 3,
      },
    },
  },
  retina_detect: true,
};

export default particleParams;
