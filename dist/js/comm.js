new fullpage("#fullpage", {
  //options here
  //  autoScrolling: true,
  //  scrollHorizontally: true,
  //  navigationTooltips: ["a", "b", "c", "d"],
  //  anchors: ["INTRO", "PROFILE", "PORTFOLIO", "CONTACT"],
  //  menu: ["#navbar-nav", "#fp-nav"],
  //  navigationPosition: "le",

  navigation: true,
  responsiveWidth: 700,
  navigationTooltips: [
    "HOME",
    "ABOUT",
    "PORTFOLIO",
    "PORTFOLIO2",
    "PORTFOLIO3",
    "CONTACT",
  ],
  anchors: [
    "INTRO",
    "PROFILE",
    "PORTFOLIO",
    "PORTFOLIO2",
    "PORTFOLIO3",
    "CONTACT",
  ],
  menu: ["#navbar-nav"],
  parallax: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
  },
});
