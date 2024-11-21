/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 2024
 * This program counts down from 4 and displays it on Neopixels.
*/

let neopixelStrip: neopixel.Strip = null
let countdownNumber: number

basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
countdownNumber = 4
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  countdownNumber = 4
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.show()

  while (countdownNumber >= 0){
    basic.showNumber(countdownNumber)
    neopixelStrip.show()
    countdownNumber = (countdownNumber - 1)
    neopixelStrip.setPixelColor(countdownNumber, neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
  }
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
