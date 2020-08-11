const determinePoker = cardList => {
    const numberList = cardList.map(card => card.number)
    
    const deduplicationCount = new Set(numberList).size
    const sameNumberCount = numberList.filter(number => number === numberList[0]).length
    
    if (deduplicationCount === 2 && (sameNumberCount === 2 || sameNumberCount === 3) ) {
        return "完全にフルハウス"
    }
    
    return ""
}

const cardList = [{ mark: "spade", number: 10 }, { mark: "hart", number: 10 }, { mark: "dia", number: 10 }, { mark: "spade", number: 11 }, { mark: "crover", number: 11 }]

console.log(determinePoker(cardList))