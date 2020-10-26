const exampleGameState = {
    global: {
        playerTurn: "1" // or "2"
        // Probably way more here that I'm not thinking about.
    },
    player1: {
        // Each card is represented by an ID
        // 1-10 some color to 10, 11-20 some other color to 10, etc 
        // ... up to 60 (for the 6 colors)
        // Tactics cards have IDs counting up from 100
        hand: [7, 19, 32, 8, 15, 103, 104],
        // A player can only have played 1 more tactics card than their opponent
        tacticsPlayed: [106],
        
    },
    player2: {
        // 7 card hand limit I'm pretty sure
        hand: [2, 105, 27, 3, 30, 39, 10],
        tacticsPlayed: [],
    },
    table: {
        decks: {
            troops: [/* IDs of troops left to draw */],
            tactics: [/* IDs of tactics left to draw */],
            // Decks on the table are never shuffled during the game
            // and can only be manipulated by Scout tactic
        },
        flags: [
            {
                formations: {
                    player1: [100, 31, 33],
                    player2: []
                },
                owner: null, // "1" or "2" for flag-owning player, or null for unresolved flags
                tacticsEffects: ["fog"], // also "mud", will most times be empty or property will be undefined
            }
        ]
    }
};