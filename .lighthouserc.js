module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: "dist",
      url: [
        "/",
        "/about",
        "/stages/hyakunin-isshu"
      ]
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "offscreenimages": "off",
        "uses-webpimages": "off"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
