const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const shuffle = array => {
	if (!Array.isArray(array)) {
		throw new Error(`Can't shuffle something that is not an array.`)
	}
	const remainingArray = [...array]
	const shuffledArray = []
	while (shuffledArray.length < array.length) {
		let randomIndex = getRandomInt(remainingArray.length)
		shuffledArray.push(remainingArray[randomIndex])
		remainingArray.splice(randomIndex, 1)
	}
	return shuffledArray
}