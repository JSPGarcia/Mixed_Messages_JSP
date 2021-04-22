//Array Hub:
let firtsPick = [
    'The man', 'The Elf',
    'The Woman', 'The Kid',
    "The girl", 'The Crocodile',
    'The ghost', 'The pirate',
    'The dragon', 'The master',
    'The child', 'The apprentice',
    'The fighter', 'The warrior',
    'The wizard', 'The witch',
    'The facist', 'The communist',
    'The democrat', 'The republican'
]
let secondPick = [
        'eats', 'fights',
        'punches', 'dances',
        'attacks', 'runs',
        'shoots', 'flies',
        'dreams', 'sneaks',
        'cuts', 'hugs',
        'kisses', 'paints',
        'fulminates', 'cries',
        'drinks', 'honors',
        'sees', 'watches'
    ]
    //variable Hub:
let phrase = `${firtsPick[Math.floor(Math.random() * firtsPick.length)]} ${secondPick[Math.floor(Math.random() * firtsPick.length)]} ${firtsPick[Math.floor(Math.random() * firtsPick.length)]}`

//Function bay

console.log(phrase)