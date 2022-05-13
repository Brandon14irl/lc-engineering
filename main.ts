radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    } else {
        if (receivedNumber == 2) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
        } else {
            if (receivedNumber == 3) {
                Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 0)
            }
        }
    }
})
basic.forever(function () {
    radio.setGroup(1)
    basic.showLeds(`
        . . # # .
        . # . . .
        # . . . .
        # . . . .
        . # # . .
        `)
})
