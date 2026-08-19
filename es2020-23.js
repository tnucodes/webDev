// features in es-2020

// bigint

// optional chaining operator - ?.

let will_pokemon = {
    pikachu:{
        type : 'mouse pokemon',
        height : 2,
        weight : 10,
        power : ''
    }
}
let power = will_pokemon?.pikachu?.power || "no power "
// here or checks if statement is true or false
//  even if power is zero it returns no power
console.log(power)

// nullish coalescing operator - ??

let tan_pokemon = {
    pikachu:{
        type : 'mouse pokemon',
        height : 2,
        weight : 10,
        power : 0
    }
}
let power = tan_pokemon?.pikachu?.power ?? "no power"

// es2023

ztmMonsterList.toReversed()
(4) ['pye', 'denodude', 'mac', 'mr.mouse']
ztmMonsterList.toSorted()
(4) ['denodude', 'mac', 'mr.mouse', 'pye']
ztmMonsterList.toSpliced(1,1)
(3) ['mr.mouse', 'denodude', 'pye']
ztmMonsterList
(4) ['mr.mouse', 'mac', 'denodude', 'pye']
ztmMonsterList.with(1,'gost')
(4) ['mr.mouse', 'gost', 'denodude', 'pye']

