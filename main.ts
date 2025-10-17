input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 88), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 82), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Ghost)
        basic.showIcon(IconNames.Skull)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 88), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    }
    basic.clearScreen()
})
