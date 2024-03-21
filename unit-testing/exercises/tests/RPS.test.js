const test = require("../RPS.js")

describe("whoWon", function() {
    
    it("returns 'Player 2 wins!' if p1 = rock & P2 = scissors", function() {
    expect(test.whoWon('rock', 'paper')).toBe("Player 2 wins!");
    });

    it("returns 'Player 2 wins!' if ", function() {
        expect(test.whoWon('rock', 'paper')).toBe("Player 2 wins!");
        expect(test.whoWon('scissors', 'rock')).toBe("Player 2 wins!");
        expect(test.whoWon('paper', 'scissors')).toBe("Player 2 wins!");
        });

});