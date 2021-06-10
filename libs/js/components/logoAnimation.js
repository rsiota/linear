function logoAnimation() {

  ml.timelines["ml"] = anime
    .timeline({})
    .add({
      targets: ".path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      direction: "linear",
      duration: 5000,
    })
}

export { logoAnimation };