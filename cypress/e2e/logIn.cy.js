const {
    givenLogInAsStandardUser,
    givenLogInAsLockedOutUser,
    givenLogInAsProblemUser,
    givenLogInAsPerformanceGlitchUser

} = require('../support/logIn')

describe('Log In', () => {

    it('logs in as standard user', () => {
        givenLogInAsStandardUser()
    })

    it('logs in as locked out user', () => {
        givenLogInAsLockedOutUser()
    })

    it('logs in as problem user', () => {
        givenLogInAsProblemUser()
    })

    it('logs in as performance glitch user', () => {
        givenLogInAsPerformanceGlitchUser()
    })

})
