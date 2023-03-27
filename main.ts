basic.forever(function () {
    music.playMelody("B D B C5 E G E C ", 120)
    music.rest(music.beat(BeatFraction.Whole))
    music.playMelody("B G F C5 A E B C5 ", 120)
    music.playMelody("B G B C B F A B ", 120)
})
