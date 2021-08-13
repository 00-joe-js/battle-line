const TACTIC_TYPES_ENUM = {
    /* Morale cards are played into the player's layout in place of, 
       and in a similar way to, Troop cards
    */
    Leader: "Morale+Leader",
    Morale: "Morale",
    /* Environment tactics are played face up on the player's near side of an unclaimed Flag, so that
       there is enough space for the Troop cards to be placed next to the Flag.
    */
    Environment: "Environment",
    /* Guile tactics are played face up on the player's own side next to the Tactics card deck. All
       cards played there must be clearly visible and remain there until the end of the game.
    */
    Guile: "Guile",
};

export default [
    {
        name: "Alexander",
        type: TACTIC_TYPES_ENUM.Leader,
        rulebookDescription: `
            The Leaders are wild cards. Play a Leader like any Troop
            card, but define the color and value when the Flag is resolved. For example, you have a
            Blue 8 in your layout. If you add a Leader, it gives you the option of adding a Blue 6, 7, 9
            or 10 to make a Wedge, or an 8 to form a Phalanx. Each player may only have one
            Leader on his side of the battle line. If drawn, a second Leader remains unplayable in the
            player's hand until the end of the game.
        `
    },
    {
        name: "Darius",
        type: TACTIC_TYPES_ENUM.Leader,
        rulebookDescription: `
            The Leaders are wild cards. Play a Leader like any Troop
            card, but define the color and value when the Flag is resolved. For example, you have a
            Blue 8 in your layout. If you add a Leader, it gives you the option of adding a Blue 6, 7, 9
            or 10 to make a Wedge, or an 8 to form a Phalanx. Each player may only have one
            Leader on his side of the battle line. If drawn, a second Leader remains unplayable in the
            player's hand until the end of the game.
        `
    },
    {
        name: "Companion Calvary",
        type: TACTIC_TYPES_ENUM.Morale,
        rulebookDescription: `
            Play this card like any Troop card of value 8, but define its color
            when the Flag is resolved.
        `
    },
    {
        name: "Shield Bearers",
        type: TACTIC_TYPES_ENUM.Morale,
        rulebookDescription: `
            Play this card like any Troop card, but define its color and its value not
            larger than 3 when the Flag is resolved.
        `
    },
    {
        /*
          This tactic card gets played on a flag, so likely should be stored on the flag in game state.
        */
        name: "Fog",
        type: TACTIC_TYPES_ENUM.Environment,
        rulebookDescription: `
            The fog card disables all formations, and the Flag is merely decided on the basis
            of the total value of cards on each side.
        `,
    },
    {
        /* 
            This tactics card means we need to expect completed formations of length 4
            and also can't immediately consider formations of length 3 to be completed
        */
        name: "Mud",
        type: TACTIC_TYPES_ENUM.Environment,
        rulebookDescription: `
            The claim for this Flag is now based on four cards on either side, so the
            formations need to be expanded. This makes it particularly difficult to achieve a Wedge
            or Phalanx.
        `
    },
    {
        name: "Scout",
        type: TACTIC_TYPES_ENUM.Guile,
        rulebookDescription: `
            The player draws a total of three cards from one or both decks. Then he chooses
            any two cards from his hand and places them face down on top of their respective deck or
            decks.
        `
    },
    {
        name: "Redeploy",
        type: TACTIC_TYPES_ENUM.Guile,
        rulebookDescription: `
            The player chooses anyone Troop or Tactics card from his side next to an
            unclaimed Flag, and places it face up into another of his available slots, or discards it face
            up on his side next to the Tactics card deck. Do not cover any other discard.
        `
    },
    {
        name: "Deserter",
        type: TACTIC_TYPES_ENUM.Guile,
        rulebookDescription: `
            The player may choose any one Troop or Tactics card from the opponent's
            side next to an unclaimed Flag, and discards it face up on the opponent's side next to the
            Tactics card deck. Do not cover any other discard.
        `
    },
    {
        name: "Traitor",
        type: TACTIC_TYPES_ENUM.Guile,
        rulebookDescription: `
            The player may choose anyone Troop card (but not a Tactics card) from the
            opponent's side next to an unclaimed Flag, and places it into an empty slot on his own
            side.
        `
    },
];