// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-6-04/sw.js", {
    scope: "/ICS2O-6-04/",
  })
}

;("use strict")

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")
  console.log(radius)

  // process
  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>r = " + radius + "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "volume is: " + volume + " mm²"
}
