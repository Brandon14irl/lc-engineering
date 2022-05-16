radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
    }
    // steering
    if (receivedNumber == 2) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 30)
    }
    // steering
    if (receivedNumber == 3) {
        speed += 10
    }
    if (receivedNumber == 4) {
        speed += -10
    }
    // DRS - if button is turned on motor 4 will turn for a second, when turned off it will go back to its original position
    if (receivedNumber == 5) {
    	
    }
    if (receivedNumber == 6) {
    	
    }
    if (receivedNumber == 7) {
    	
    }
    // steering
    if (receivedNumber == 8) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
    }
})
let speed = 0
speed = 1
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
    basic.showNumber(131852)
    speed = 0
})
