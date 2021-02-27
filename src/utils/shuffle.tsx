const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const shuffle = (array: string[]): string[] => {
	const remainingArray = [...array]
	const shuffledArray = []
	while (shuffledArray.length < array.length) {
		let randomIndex = getRandomInt(remainingArray.length)
		shuffledArray.push(remainingArray[randomIndex])
		remainingArray.splice(randomIndex, 1)
	}
	return shuffledArray
}