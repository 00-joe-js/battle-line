const TACTIC_TYPES_ENUM = {
    Morale: "Morale",
    Environment: "Environment",
    Guile: "Guile",
};

export default [
    {
        name: "Alexander",
        type: TACTIC_TYPES_ENUM.Morale,
        subType: "Leader"
    },
    {
        name: "Darius",
        type: TACTIC_TYPES_ENUM.Morale,
        subType: "Leader",
    },
    {
        name: "Companion Calvary",
        type: TACTIC_TYPES_ENUM.Morale,
        subType: null,
    },
    {
        name: "Shield Bearers",
        type: TACTIC_TYPES_ENUM.Morale,
        subType: null,
    },
    {
        name: "Fog",
        type: TACTIC_TYPES_ENUM.Environment,
        subType: null,
    },
    {
        name: "Mud",
        type: TACTIC_TYPES_ENUM.Environment,
        subType: null,
    },
    {
        name: "Scout",
        type: TACTIC_TYPES_ENUM.Guile,
        subType: null,
    },
    {
        name: "Redeploy",
        type: TACTIC_TYPES_ENUM.Guile,
        subType: null,
    },
    {
        name: "Deserter",
        type: TACTIC_TYPES_ENUM.Guile,
        subType: null,
    },
    {
        name: "Traitor",
        type: TACTIC_TYPES_ENUM.Guile,
        subType: null,
    },
];