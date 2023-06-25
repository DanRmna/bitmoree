input.onButtonPressed(Button.A, function () {
    servo = game.score()
})
let servo = 0
game.startCountdown(10000)
pins.servoWritePin(AnalogPin.P12, servo)
basic.forever(function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    servo += 1
    power.fullPowerOn(FullPowerSource.A)
    pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (game.isGameOver()) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        362,
        178,
        255,
        255,
        9999,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
