input.touchD0.onEvent(ButtonEvent.LongClick, function () {
    D0 = 0
})
input.touchD0.onEvent(ButtonEvent.Click, function () {
    D0 = 1
})
let D2 = 0
let D0 = 0
let brightness = 0
light.setMode(NeoPixelMode.RGBW)
let strip = light.createStrip(pins.D1, 1)
strip.setBrightness(brightness)
brightness = 0
let PixBrightness = 0
pixel.setBrightness(brightness)
D0 = 0
let hue = 245
forever(function () {
    while (D0 == 0) {
        for (let index = 0; index < 50; index++) {
            brightness += 5
            strip.setBrightness(brightness)
            pixel.setBrightness(brightness)
            pause(100)
            hue += 0.25
            pixel.setColor(pixel.hsv(hue, 255, 255))
            strip.setAll(light.hsv(hue, 255, 255))
        }
        pause(2000)
        for (let index = 0; index < 50; index++) {
            brightness += -5
            strip.setBrightness(brightness)
            pixel.setBrightness(brightness)
            pause(100)
            hue += -0.25
            pixel.setColor(pixel.hsv(hue, 255, 255))
            strip.setAll(light.hsv(hue, 255, 255))
            D2 = 0
        }
    }
})
