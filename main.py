word_number = 0
word = 0

def on_button_pressed_a():
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    global word_number
    word_number = randint(1, 4)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    if word == 1:
        basic.show_string("in the original or natural place or site")
        control.reset()
    if word == 2:
        basic.show_string("inactivity resulting from a dislike of work")
        control.reset()
    if word == 3:
        basic.show_string("widely known and esteemed")
        control.reset()
    if word == 4:
        basic.show_string("not worth considering")
        control.reset()
    if word == 5:
        basic.show_string("under a moral obligation to someone")
        control.reset()
    if word == 6:
        basic.show_string("the property of being close together")
        control.reset()
    if word == 7:
        basic.show_string("the property of being close together")
        control.reset()
    if word == 8:
        basic.show_string("profoundly honored")
        control.reset()
    if word == 9:
        basic.show_string("in the original or natural place or site")
        control.reset()
    if word == 10:
        basic.show_string("ascribe human features to something")
        control.reset()
    if word == 11:
        basic.show_string("incapable of being explained or accounted for")
        control.reset()
    if word == 12:
        basic.show_string("the state when one person or group has power over another")
        control.reset()
    if word == 13:
        basic.show_string("the state when one person or group has power over another")
        control.reset()
    if word == 14:
        basic.show_string("disposed or willing to comply")
        control.reset()
    if word == 15:
        basic.show_string("having a difficult and contrary disposition")
        control.reset()
    if word == 16:
        basic.show_string("showing great respect for god")
        control.reset()
    if word == 17:
        basic.show_string("clearly revealed to the mind or the senses or judgment")
        control.reset()
    if word == 18:
        basic.show_string("in name only")
        control.reset()
    if word == 19:
        basic.show_string("a large entrance or reception room or area")
        control.reset()
    if word == 20:
        basic.show_string("being essentially equal to something")
        control.reset()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_forever():
    global word
    if word_number == 1:
        basic.show_string("in situ")
        basic.pause(5000)
        basic.show_string("in the original or natural place or site")
        word = 1 + 0
    if word_number == 2:
        basic.show_string("indolence")
        basic.pause(5000)
        basic.show_string("inactivity resulting from a dislike of work")
        word = 0 + 2
    if word_number == 3:
        basic.show_string("illustrious")
        basic.pause(5000)
        basic.show_string("widely known and esteemed")
        word = 0 + 3
    if word_number == 4:
        basic.show_string("trifling")
        basic.pause(5000)
        basic.show_string("not worth considering")
        word = 0 + 4
    if word_number == 5:
        basic.show_string("menagerie")
        basic.pause(5000)
        basic.show_string("a collection of live animals for study or display")
        word = 0 + 5
    if word_number == 6:
        basic.show_string("beholden")
        basic.pause(5000)
        basic.show_string("under a moral obligation to someone")
        word = 0 + 6
    if word_number == 7:
        basic.show_string("proximity")
        basic.pause(5000)
        basic.show_string("the property of being close together")
        word = 0 + 7
    if word_number == 8:
        basic.show_string("venerable")
        basic.pause(5000)
        basic.show_string("profoundly honored")
        word = 0 + 8
    if word_number == 9:
        basic.show_string("redoubtable")
        basic.pause(5000)
        basic.show_string("in the original or natural place or site")
        word = 0 + 9
    if word_number == 10:
        basic.show_string("anthropomorphize")
        basic.pause(5000)
        basic.show_string("ascribe human features to something")
        word = 0 + 10
    if word_number == 11:
        basic.show_string("inexplicable")
        basic.pause(5000)
        basic.show_string("incapable of being explained or accounted for")
        word = 0 + 11
    if word_number == 12:
        basic.show_string("versed")
        basic.pause(5000)
        basic.show_string("the state when one person or group has power over another")
        word = 0 + 12
    if word_number == 13:
        basic.show_string("ascendancy")
        basic.pause(5000)
        basic.show_string("the state when one person or group has power over another")
        word = 0 + 13
    if word_number == 14:
        basic.show_string("amenable")
        basic.pause(5000)
        basic.show_string("disposed or willing to comply")
        word = 0 + 14
    if word_number == 15:
        basic.show_string("cantankerous")
        basic.pause(5000)
        basic.show_string("having a difficult and contrary disposition")
        word = 0 + 15
    if word_number == 16:
        basic.show_string("reverent")
        basic.pause(5000)
        basic.show_string("showing great respect for god")
        word = 0 + 16
    if word_number == 17:
        basic.show_string("manifest")
        basic.pause(5000)
        basic.show_string("clearly revealed to the mind or the senses or judgment")
        word = 0 + 17
    if word_number == 18:
        basic.show_string("nominally")
        basic.pause(5000)
        basic.show_string("in name only")
        word = 0 + 18
    if word_number == 19:
        basic.show_string("vestibule")
        basic.pause(5000)
        basic.show_string("a large entrance or reception room or area")
        word = 0 + 19
    if word_number == 20:
        basic.show_string("tantamount")
        basic.pause(5000)
        basic.show_string("being essentially equal to something")
        word = 1 + 20
basic.forever(on_forever)
