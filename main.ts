let word = 0
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.LogoUp, function () {
    word = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    word = randint(1, 4)
})
input.onGesture(Gesture.TiltRight, function () {
    if (word == 1) {
        basic.showString("in the original or natural place or site")
        control.reset()
    }
    if (word == 2) {
        basic.showString("inactivity resulting from a dislike of work")
        control.reset()
    }
    if (word == 3) {
        basic.showString("widely known and esteemed")
        control.reset()
    }
    if (word == 4) {
        basic.showString("not worth considering")
        control.reset()
    }
    if (word == 5) {
        basic.showString("under a moral obligation to someone")
        control.reset()
    }
    if (word == 6) {
        basic.showString("the property of being close together")
        control.reset()
    }
    if (word == 7) {
        basic.showString("the property of being close together")
        control.reset()
    }
    if (word == 8) {
        basic.showString("profoundly honored")
        control.reset()
    }
    if (word == 9) {
        basic.showString("in the original or natural place or site")
        control.reset()
    }
    if (word == 10) {
        basic.showString("ascribe human features to something")
        control.reset()
    }
    if (word == 11) {
        basic.showString("incapable of being explained or accounted for")
        control.reset()
    }
    if (word == 12) {
        basic.showString("the state when one person or group has power over another")
        control.reset()
    }
    if (word == 13) {
        basic.showString("the state when one person or group has power over another")
        control.reset()
    }
    if (word == 14) {
        basic.showString("disposed or willing to comply")
        control.reset()
    }
    if (word == 15) {
        basic.showString("having a difficult and contrary disposition")
        control.reset()
    }
    if (word == 16) {
        basic.showString("showing great respect for god")
        control.reset()
    }
    if (word == 17) {
        basic.showString("clearly revealed to the mind or the senses or judgment")
        control.reset()
    }
    if (word == 18) {
        basic.showString("in name only")
        control.reset()
    }
    if (word == 19) {
        basic.showString("a large entrance or reception room or area")
        control.reset()
    }
    if (word == 20) {
        basic.showString("being essentially equal to something")
        control.reset()
    }
})
basic.forever(function () {
    let word_number = 0
    if (word_number == 1) {
        basic.showString("in situ")
        basic.pause(5000)
        basic.showString("in the original or natural place or site")
        word = 1 + 0
    }
    if (word_number == 2) {
        basic.showString("indolence")
        basic.pause(5000)
        basic.showString("inactivity resulting from a dislike of work")
        word = 0 + 2
    }
    if (word_number == 3) {
        basic.showString("illustrious")
        basic.pause(5000)
        basic.showString("widely known and esteemed")
        word = 0 + 3
    }
    if (word_number == 4) {
        basic.showString("trifling")
        basic.pause(5000)
        basic.showString("not worth considering")
        word = 0 + 4
    }
    if (word_number == 5) {
        basic.showString("menagerie")
        basic.pause(5000)
        basic.showString("a collection of live animals for study or display")
        word = 0 + 5
    }
    if (word_number == 6) {
        basic.showString("beholden")
        basic.pause(5000)
        basic.showString("under a moral obligation to someone")
        word = 0 + 6
    }
    if (word_number == 7) {
        basic.showString("proximity")
        basic.pause(5000)
        basic.showString("the property of being close together")
        word = 0 + 7
    }
    if (word_number == 8) {
        basic.showString("venerable")
        basic.pause(5000)
        basic.showString("profoundly honored")
        word = 0 + 8
    }
    if (word_number == 9) {
        basic.showString("redoubtable")
        basic.pause(5000)
        basic.showString("in the original or natural place or site")
        word = 0 + 9
    }
    if (word_number == 10) {
        basic.showString("anthropomorphize")
        basic.pause(5000)
        basic.showString("ascribe human features to something")
        word = 0 + 10
    }
    if (word_number == 11) {
        basic.showString("inexplicable")
        basic.pause(5000)
        basic.showString("incapable of being explained or accounted for")
        word = 0 + 11
    }
    if (word_number == 12) {
        basic.showString("versed")
        basic.pause(5000)
        basic.showString("the state when one person or group has power over another")
        word = 0 + 12
    }
    if (word_number == 13) {
        basic.showString("ascendancy")
        basic.pause(5000)
        basic.showString("the state when one person or group has power over another")
        word = 0 + 13
    }
    if (word_number == 14) {
        basic.showString("amenable")
        basic.pause(5000)
        basic.showString("disposed or willing to comply")
        word = 0 + 14
    }
    if (word_number == 15) {
        basic.showString("cantankerous")
        basic.pause(5000)
        basic.showString("having a difficult and contrary disposition")
        word = 0 + 15
    }
    if (word_number == 16) {
        basic.showString("reverent")
        basic.pause(5000)
        basic.showString("showing great respect for god")
        word = 0 + 16
    }
    if (word_number == 17) {
        basic.showString("manifest")
        basic.pause(5000)
        basic.showString("clearly revealed to the mind or the senses or judgment")
        word = 0 + 17
    }
    if (word_number == 18) {
        basic.showString("nominally")
        basic.pause(5000)
        basic.showString("in name only")
        word = 0 + 18
    }
    if (word_number == 19) {
        basic.showString("vestibule")
        basic.pause(5000)
        basic.showString("a large entrance or reception room or area")
        word = 0 + 19
    }
    if (word_number == 20) {
        basic.showString("tantamount")
        basic.pause(5000)
        basic.showString("being essentially equal to something")
        word = 1 + 20
    }
})
