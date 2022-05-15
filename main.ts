radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
    }
    // steering
    if (receivedNumber == 2) {
        servos.P0.setAngle(90)
    }
    // steering
    if (receivedNumber == 3) {
        servos.P0.setAngle(90)
    }
    if (receivedNumber == 4) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
    }
    // DRS - if button is turned on motor 2 will turn for a second turned off it will go back to its original position
    if (receivedNumber == 5) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
    }
    if (receivedNumber == 6) {
        speed += -10
    }
    if (receivedNumber == 7) {
        speed += 10
    }
})
let speed = 0
speed = 0
music.playTone(175, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(294, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(523, music.beat(BeatFraction.Quarter))
basic.pause(5)
music.playTone(988, music.beat(BeatFraction.Half))
basic.pause(10)
pins.digitalWritePin(DigitalPin.P14, 1)
basic.forever(function () {
    radio.setGroup(80)
})
