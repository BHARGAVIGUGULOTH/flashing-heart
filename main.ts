basic.showString("Hi")
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.setVolume(255)
basic.showIcon(IconNames.Heart)
