radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 8)
    } else if (receivedNumber == 2) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 79)
    } else {
        if (receivedNumber == 3) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 0)
        }
    }
})
music.playTone(175, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(294, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(523, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(988, music.beat(BeatFraction.Half))
basic.pause(10)
basic.forever(function () {
    radio.setGroup(1)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
})
