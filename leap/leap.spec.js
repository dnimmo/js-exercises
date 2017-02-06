const { isLeap } = require('./leap')

describe('Leap year', () => {

  it('is not very common', () => {
    expect(isLeap(2015)).toBe(false)
  })

  it('is introduced every 4 years to adjust about a day', () => {
    expect(isLeap(2016)).toBe(true)
  })

  it('is skipped every 100 years to remove an extra day', () => {
    expect(isLeap(1900)).toBe(false)
  })

  it('is reintroduced every 400 years to adjust another day', () => {
    expect(isLeap(2000)).toBe(true)
  })

  describe('Additional example of a leap year that', () => {

    it('is not a leap year', () => {
      expect(isLeap(1978)).toBe(false)
    })

    it('is a common leap year', () => {
      expect(isLeap(1992)).toBe(true)
    })

    it('is skipped every 100 years', () => {
      expect(isLeap(2100)).toBe(false)
    })

    it('is reintroduced every 400 years', () => {
      expect(isLeap(2400)).toBe(true)
    })
  })
})
