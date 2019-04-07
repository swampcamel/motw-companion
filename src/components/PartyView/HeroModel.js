const generateHero = (name, type, subtype, typeEffect, history, statsObject, attackTypesArray, movesArray, gearArray, lookObject, improvementsArray, advancedImprovementsArray, luckPointValue=0, harmPointValue=0, xpPointValue=0, level=1) => ({
    name: name,
    type: type,
    subtype: subtype,
    typeEffect: typeEffect,
    level: level,
    xpPointValue: xpPointValue,
    harmPointValue: harmPointValue,
    luckPointValue: luckPointValue,
    history: history,
    statsObject: statsObject,
    attackTypesArray: attackTypesArray,
    movesArray: movesArray,
    gearArray: gearArray,
    lookObject: lookObject,
    improvementsArray: improvementsArray,
    advancedImprovementsArray: advancedImprovementsArray
})

export default generateHero
