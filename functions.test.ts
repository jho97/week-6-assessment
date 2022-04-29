const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test("should return an array", () => {
        expect(Array.isArray(['shuffleArray.arrCopy'])).toBe(true)
    })

    test("should be shuffled around", () => {
        expect(shuffleArray).toHaveLength(5)
    })

})