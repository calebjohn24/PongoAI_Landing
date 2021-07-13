module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      height: {
        "25vh": "25vh",
        "35vh": "35vh",
        "50vh": "50vh",
        "75vh": "75vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "75":"18.75rem",
        "38":"9.5rem"
      }
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["Inter", "ui-serif", "Georgia"],
      mono: ["Inconsolata", "ui-monospace", "SFMono-Regular"],
    },
    
    
  },
  variants: {
    extend: {},
  }
};
