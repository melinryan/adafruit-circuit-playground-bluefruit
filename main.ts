input.touchD0.onEvent(ButtonEvent.LongClick, function () {
    while (D0 == 0) {
        for (let index = 0; index < 50; index++) {
            brightness += 5
            strip.setBrightness(brightness)
            pixel.setBrightness(brightness)
            pause(100)
            hue += 10
            pixel.setColor(pixel.hsv(hue, 255, 255))
            strip.setAll(light.hsv(hue, 255, 255))
            pins.A1.analogWrite(PinValue)
            PinValue += 20
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
            pins.A1.analogWrite(PinValue)
            PinValue += -20
        }
    }
})
input.touchD0.onEvent(ButtonEvent.Click, function () {
    D0 = 1
})
let PinValue = 0
let hue = 0
let D0 = 0
let brightness = 0
let strip: light.NeoPixelStrip = null
light.setMode(NeoPixelMode.RGBW)
strip = light.createStrip(pins.D1, 1)
pins.A1.analogSetPeriod(1000)
strip.setBrightness(brightness)
brightness = 0
let PixBrightness = 0
pixel.setBrightness(brightness)
D0 = 0
hue = 245
PinValue = 0
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
            pins.A1.analogWrite(PinValue)
            PinValue += 20
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
            pins.A1.analogWrite(PinValue)
            PinValue += -20
        }
    }
})
