def on_touch_d0_long_click():
    global D0
    D0 = 0
input.touch_d0.on_event(ButtonEvent.LONG_CLICK, on_touch_d0_long_click)

def on_touch_d0_click():
    global D0
    D0 = 1
input.touch_d0.on_event(ButtonEvent.CLICK, on_touch_d0_click)

D0 = 0
brightness = 0
light.set_mode(NeoPixelMode.RGBW)
strip = light.create_strip(pins.D1, 1)
strip.set_brightness(brightness)
strip.set_all(0x007fff)
brightness = 0
PixBrightness = 0
pixel.set_color(0xff0000)
pixel.set_brightness(brightness)
D0 = 0
D2 = 0
hue = 255

def on_forever():
    global brightness, hue
    while D0 == 0:
        for index in range(50):
            brightness += 5
            strip.set_brightness(brightness)
            pixel.set_brightness(brightness)
            pause(100)
            hue += -1
            pixel.set_color(pixel.hsv(hue, 255, 255))
        for index2 in range(50):
            brightness += -5
            strip.set_brightness(brightness)
            pixel.set_brightness(brightness)
            pause(100)
            hue += 1
            pixel.set_color(pixel.hsv(hue, 255, 255))
forever(on_forever)
