const perks = {
    Defensive: ["Assassin's Vigour", "Bloodless", "Fireproof", "Fortress", "Guardian", "Iceborne", "Insulated", "Nine Lives", "Shellshock Resist", "Sturdy", "Tough", "Warmth"],
    Mobility: ["Agility", "Conditioning", "Endurance", "Evasion", "Fleet Footed", "Nimble", "Swift"],
    Power: ["Aetherhunter", "Deconstruction", "Knockout King", "Overpower", "Pacifier", "Rage", "Ragehunter", "Sharpened"],
    Technique: ["Acidic", "Adrenaline", "Barbed", "Bladestorm", "Cunning", "Evasive Fury", "Merciless", "Molten", "Predator", "Savagery", "Weighted Strikes", "Wild Frenzy"],
    Utility: ["Aetherborne", "Aetheric Attunement", "Aetheric Frenzy", "Conduit", "Energized", "Lucent", "Medic", "Stunning Vigour", "Vampiric"]
}
const equipment = { 
    weapons: {
        swords: [
            {
                name: "Raging Blade",
                perk: "Ragehunter",
                cells: ["Utility", "Defensive"],
                perkCells: ["Power", "Utility", "Defensive"],
                element: "Neutral"
            },
            {
                name: "Cry of the Shrike",
                perk: "Conditioning",
                cells: ["Mobility", "Mobility"],
                perkCells: ["Mobility", "Mobility", "Mobility"],
                element: "Neutral"
            },
        ],
        hammers: [

        ],
        axes: [
            
        ],
        chainBlades: [

        ],
        warPikes: [

        ],
        repeaters: {
                name: "Ostian Repeaters",
                perk: "None",
                cells: ["Technique", "Mobility"],
                perkCells: ["Technique", "Mobility"],
                element: "Any"
        }
    },
    armour: {
        head: [
            {
                name: "Quillspike Mask",
                perk: "Savagery",
                cell: "Defensive",
                perkCells: ["Technique", "Defensive"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Guise of the Rift",
                perk: "Aetheric Attunement",
                cell: "Utility",
                perkCells: ["Utility", "Utility"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
            {
                name: "Sight of Stone",
                perk: "Tough",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Hellplate Casque",
                perk: "Ragehunter",
                cell: "Technique",
                perkCells: ["Power", "Technique"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Draskscale Helmet",
                perk: "Aetheric Attunement",
                cell: "Power",
                perkCells: ["Utility", "Power"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Boreal Epiphany",
                perk: "Conditioning",
                cell: "Utility",
                perkCells: ["Mobility", "Utility"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Crest of Valour",
                perk: "Lucent",
                cell: "Power",
                perkCells: ["Utility", "Power"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Fiery Helm",
                perk: "Evasive Fury",
                cell: "Mobility",
                perkCells: ["Technique", "Mobility"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Gnasher Cap",
                perk: "Bloodless",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Sight of Stone",
                perk: "Tough",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Lightning Helm",
                perk: "Energized",
                cell: "Technique",
                perkCells: ["Utility", "Technique"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Brow of Ice",
                perk: "Knockout King",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Visage of Thorns",
                perk: "Agility",
                cell: "Technique",
                perkCells: ["Mobility", "Technique"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Shocking Gaze",
                perk: "Medic",
                cell: "Utility",
                perkCells: ["Utility", "Utility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Skraevwing Helmet",
                perk: "Fleet Footed",
                cell: "Mobility",
                perkCells: ["Mobility", "Mobility"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Shrikedown Helm",
                perk: "Evasion",
                cell: "Technique",
                perkCells: ["Mobility", "Technique"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Volcanic Helm",
                perk: "Fireproof",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Eye of the Swarm",
                perk: "Shellshock Resist",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Light's Crown",
                perk: "Conduit",
                cell: "Technique",
                perkCells: ["Utility", "Technique"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Dark Watch",
                perk: "Rage",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
            {
                name: "The Skullforge",
                perk: "None",
                cell: "Defensive",
                perkCells: ["None", "Utility"],
                element: "Blaze",
                effect: "1.5% of all damage dealt becomes a stamina shield (max 50) that depletes first when spending stamina. Depletes slowly after 5 seconds not dealing damage.",
                resistance: [25, 137.5]
            },
            {
                name: "Prismatic Grace",
                perk: "None",
                cell: "Technique",
                perkCells: ["None", "Utility"],
                element: "Radiant",
                effect: "After reviving another player, grant them a Radiant Prism that blocks incoming damage for 5 seconds. The first time you take lethal damage, gain a Radiant Prism that blocks incoming damage for 10 seconds. While active, reviving another player fully restores both players but removes the Prism even at full danger.",
                resistance: [25, 137.5]
            },
            {
                name: "Tragic Echo",
                perk: "None",
                cell: "Power",
                perkCells: ["None", "Utility"],
                element: "Umbral",
                effect: "Upon your first death, become a shadow clone that deals 100% increased damage for 15 seconds.",
                resistance: [25, 137.5]
            }
        ],
        torso: [
            {
                name: "Hellplate Cuirass",
                perk: "Molten",
                cell: "Technique",
                perkCells: ["Technique", "Technique"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Shell of the Swarm",
                perk: "Bladestorm",
                cell: "Technique",
                perkCells: ["Technique", "Technique"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Aegis of Valour",
                perk: "Nine Lives",
                cell: "Power",
                perkCells: ["Defensive", "Power"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Draskscale Plate",
                perk: "Aetheric Attunement",
                cell: "Power",
                perkCells: ["Utility", "Power"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Mantle of the Rift",
                perk: "Conduit",
                cell: "Utility",
                perkCells: ["Utility", "Utility"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
            {
                name: "Boreal Resolve",
                perk: "Rage",
                cell: "Defensive",
                perkCells: ["Power", "Defensive"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Gnasher Cloak",
                perk: "Tough",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Heart of Stone",
                perk: "Guardian",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Skraevwing Jacket",
                perk: "Adrenaline",
                cell: "Mobility",
                perkCells: ["Technique", "Mobility"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Volcanic Aegis",
                perk: "Aetherhunter",
                cell: "Utility",
                perkCells: ["Power", "Utility"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Fiery Breastplate",
                perk: "Evasive Fury",
                cell: "Mobility",
                perkCells: ["Technique", "Mobility"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Lightning Plate",
                perk: "Energized",
                cell: "Mobility",
                perkCells: ["Utility", "Mobility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Core of Ice",
                perk: "Fortress",
                cell: "Power",
                perkCells: ["Defensive", "Power"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Mantle of Thorns",
                perk: "Predator",
                cell: "Utility",
                perkCells: ["Technique", "Utility"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Quillspike Jacket",
                perk: "Savagery",
                cell: "Technique",
                perkCells: ["Technique", "Technique"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Shocking Heart",
                perk: "Medic",
                cell: "Defensive",
                perkCells: ["Utility", "Defensive"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Shrikedown Plate",
                perk: "Evasion",
                cell: "Mobility",
                perkCells: ["Mobility", "Mobility"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Light's Virtue",
                perk: "Cunning",
                cell: "Utility",
                perkCells: ["Technique", "Utility"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Dark Marrow",
                perk: "Rage",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Umbral",
                resistance: [25, 137.5]
            }
        ],
        arms: [
            {
                name: "Shocking Grasp",
                perk: "Aetheric Attunement",
                cell: "Utility",
                perkCells: ["Utility", "Utility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Draskscale Gauntlets",
                perk: "Sharpened",
                cell: "Utility",
                perkCells: ["Power", "Utility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Hellplate Bracers",
                perk: "Molten",
                cell: "Power",
                perkCells: ["Technique", "Power"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Hands of the Rift",
                perk: "Evasion",
                cell: "Mobility",
                perkCells: ["Mobility", "Mobility"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
            {
                name: "Boreal Might",
                perk: "Rage",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Gauntlets of Valour",
                perk: "Lucent",
                cell: "Defensive",
                perkCells: ["Utility", "Defensive"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Grasp of Thorns",
                perk: "Evasive Fury",
                cell: "Power",
                perkCells: ["Technique", "Power"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Gnasher Grips",
                perk: "Ragehunter",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Might of Stone",
                perk: "Fortress",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Quillspike Grips",
                perk: "Barbed",
                cell: "Technique",
                perkCells: ["Technique", "Technique"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Skraevwing Gloves",
                perk: "Warmth",
                cell: "Mobility",
                perkCells: ["Defensive", "Mobility"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Volcanic Grips",
                perk: "Rage",
                cell: "Utility",
                perkCells: ["Power", "Utility"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Lightning Gloves",
                perk: "Insulated",
                cell: "Mobility",
                perkCells: ["Defensive", "Mobility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Fiery Gauntlets",
                perk: "Fireproof",
                cell: "Technique",
                perkCells: ["Defensive", "Technique"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Arms of Ice",
                perk: "Knockout King",
                cell: "Defensive",
                perkCells: ["Power", "Defensive"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Clutches of the Swarm",
                perk: "Conditioning",
                cell: "Mobility",
                perkCells: ["Mobility", "Mobility"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Shrikedown Gloves",
                perk: "Weighted Strikes",
                cell: "Mobility",
                perkCells: ["Technique", "Mobility"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Light's Refuge",
                perk: "Conduit",
                cell: "Technique",
                perkCells: ["Utility", "Technique"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Dark Embrace",
                perk: "Medic",
                cell: "Utility",
                perkCells: ["Utility", "Utility"],
                element: "Umbral",
                resistance: [25, 137.5]
            }
        ],
        legs: [
            {
                name: "Stride of Thorns",
                perk: "Predator",
                cell: "Utility",
                perkCells: ["Technique", "Utility"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Striders of the Rift",
                perk: "Conduit",
                cell: "Mobility",
                perkCells: ["Utility", "Mobility"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
            {
                name: "Boreal March",
                perk: "Iceborne",
                cell: "Technique",
                perkCells: ["Defensive", "Technique"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Draskscale Greaves",
                perk: "Fleet Footed",
                cell: "Utility",
                perkCells: ["Mobility", "Utility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Greaves of Valour",
                perk: "Aetherhunter",
                cell: "Utility",
                perkCells: ["Power", "Utility"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Gnasher Treads",
                perk: "Tough",
                cell: "Power",
                perkCells: ["Defensive", "Power"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Hellplate Greaves",
                perk: "Fortress",
                cell: "Power",
                perkCells: ["Defensive", "Power"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Pillars of Stone",
                perk: "Guardian",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Volcanic Treads",
                perk: "Rage",
                cell: "Power",
                perkCells: ["Power", "Power"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Lightning Boots",
                perk: "Aetheric Frenzy",
                cell: "Mobility",
                perkCells: ["Utility", "Mobility"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Fiery Greaves",
                perk: "Evasion",
                cell: "Defensive",
                perkCells: ["Mobility", "Defensive"],
                element: "Blaze",
                resistance: [25, 137.5]
            },
            {
                name: "Feet of Ice",
                perk: "Warmth",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Quillspike Boots",
                perk: "Shellshock Resist",
                cell: "Technique",
                perkCells: ["Defensive", "Technique"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Dance of the Swarm",
                perk: "Conditioning",
                cell: "Power",
                perkCells: ["Mobility", "Power"],
                element: "Terra",
                resistance: [25, 137.5]
            },
            {
                name: "Shocking Stride",
                perk: "Insulated",
                cell: "Defensive",
                perkCells: ["Defensive", "Defensive"],
                element: "Shock",
                resistance: [25, 137.5]
            },
            {
                name: "Shrikedown Greaves",
                perk: "Bloodless",
                cell: "Mobility",
                perkCells: ["Defensive", "Mobility"],
                element: "Neutral",
                resistance: [25, 137.5]
            },
            {
                name: "Skraevwing Boots",
                perk: "Adrenaline",
                cell: "Utility",
                perkCells: ["Technique", "Utility"],
                element: "Frost",
                resistance: [25, 137.5]
            },
            {
                name: "Light's Walk",
                perk: "Agility",
                cell: "Mobility",
                perkCells: ["Mobility", "Mobility"],
                element: "Radiant",
                resistance: [25, 137.5]
            },
            {
                name: "Dark Path",
                perk: "Nine Lives",
                cell: "Utility",
                perkCells: ["Defensive", "Utility"],
                element: "Umbral",
                resistance: [25, 137.5]
            },
        ]
    },
    lanterns: [
        {
            name: "Pangar's Shine",
            instantAbility: "Restore 25% of your maximum stamina.",
            holdAbility: "Create a frost pillar in front of you that deals 940 Frost damage to all nearby Behemoths over 12 seconds.",
            cell: "Utility",
        },
        {
            name: "Shrike's Zeal",
            instantAbility: "Move 40% faster for 6 seconds.",
            holdAbility: "Creates an aura that grants nearby Slayers 15% increased move speed and attack speed for 15 seconds.",
            cell: "Utility",
        },
        {
            name: "Skarn's Defiance",
            instantAbility: "Grants a 200 hit point shield for 4 seconds.",
            holdAbility: "Surrounds the slayer in swirling stone that deals 720 damage to all nearby Behemoths over 12 seconds.",
            cell: "Utility",
        },
        {
            name: "Drask's Eye",
            instantAbility: "Deal 40% increased damage for 6 seconds.",
            holdAbility: "Fires a lightning bolt in a direction that deals 200 shock damage multiple times as it passes through a Behemoth.",
            cell: "Utility",
        },
        {
            name: "Embermane's Rapture",
            instantAbility: "Attack 30% faster for 8 seconds.",
            holdAbility: "Create a frost pillar in front of you that deals 940 Frost damage to all nearby Behemoths over 12 seconds.",
            cell: "Utility",
        },
        {
            name: "Koshai's Bloom",
            instantAbility: "10% of damage dealt will heal you for 8 seconds.",
            holdAbility: "Dash in a direction, deal 650 damage to nearby behemoths upon arrival.",
            cell: "Utility",
        },
        {
            name: "Recruit's Lantern",
            instantAbility: "Grants a 50 hit point shield (doesn't stack).",
            holdAbility: "Disperses aether that allows the Slayer to track the Behemoth.",
            cell: "None",
        },
    ]
}


/*
NOTE:
The way this program currently works is it takes an array of desiredPerks that the user wants in their build.
It then goes through the array and identifies what cell types are in use and creates a cellCount for each cell type.
If the item has a perk on it (almost all armour does) then it simply checks to see what type of perk it is
(power, technique, utility, etc..) and adds that to the cell count.
It also assumes you want to max the perks in the desiredPerks array at 6/6, so it takes the cell type of the perk and adds
two to the cellCount for that cell type. This action occurs in the findCellCounts function.
Later, in the potentialHeadArmour/LegArmour/ArmsArmour/TorsoArmour section, the program filters out items based on
the cell type and the perk.
For example:
    {
    name: "Gnasher Treads",
    perk: "Tough",
    cell: "Power",
    perkCells: ["Defensive", "Power"],
    element: "Neutral",
    resistance: [25, 137.5]
    }
For an item like Gnasher's treads, which has the "Tough" perk (a Defensive perk) and a Power perk cell,
the program will only add it to the potential items array if the user desires "Tough" in their desiredPerks and also any
other perk which can use a "Power" cell.
*/

//weapons
const weapons = equipment.weapons
const swords = equipment.weapons.swords
const hammers = equipment.weapons.hammers
const axes = equipment.weapons.axes
const chainBlades = equipment.weapons.chainBlades
const warPikes = equipment.weapons.warPikes
const repeaters = equipment.weapons.repeaters

//armour & lanterns
const armour = equipment.armour
const head = equipment.armour.head
const torso = equipment.armour.torso
const arms = equipment.armour.arms
const legs = equipment.armour.legs
const lanterns = equipment.lanterns

/*
maxPerkSlots = 12. Each armour piece can have two perks (one actual perk and a cell slot) for a total of eight,
a weapon can have three perks (one perk and two cell slots), and each lantern has one utility cell slot.
Repeaters/exotic weapons and exotic head armour all have one less perk slot. Using any of them will lower maxPerkSlots.
*/

let maxPerkSlots = 12
let totalPerkSlotsUsed = 0
let totalUniquePerks = 0
let usingRepeaters = true
let usingExoticWeapon = false
let usingExoticHeadArmour = false
if (usingRepeaters || usingExoticWeapon || usingExoticHeadArmour) {
    if (usingRepeaters || usingExoticWeapon) {maxPerkSlots--}
    if (usingExoticHeadArmour) {maxPerkSlots--}
}

//Add code to auto-populate one of these perk slots if the user's desired weapon has a perk on it.
//Weapon will not have a perk if usingRepeaters or usingExoticWeapon
let desiredPerks = [
    {name: "Iceborne", type: "Defensive", level: 6},
    {name: "Rage", type: "Power", level: 6},
    {name: "Wild Frenzy", type: "Technique", level: 6},
    {name: "Aetheric Attunement", type: "Utility", level: 6},
    {name: "Conduit", type: "Utility", level: 6},
    {name: "Swift", type: "Mobility", level: 3},
    {name: "", type: "", level: 0},
    {name: "", type: "", level: 0},
    {name: "", type: "", level: 0},
    {name: "", type: "", level: 0},
    {name: "", type: "", level: 0},
    {name: "", type: "", level: 0},
]

//Loops through desiredPerks and finds the totalUniquePerks, totalPerkSlotsUsed,
//each cell type's count, and populates the cellsUsed array
let utilityCount = 0, techniqueCount = 0, mobilityCount = 0, powerCount = 0, defensiveCount = 0, cellsUsed = []
for (let i = 0; i < desiredPerks.length; i++) {
    if (desiredPerks[i]["name"].length > 0) {
        totalUniquePerks++
        if (desiredPerks[i]["level"] > 3) {
            console.log(`${desiredPerks[i]["name"]} requires two perk slots.`)
            totalPerkSlotsUsed += 2
            switch (desiredPerks[i]["type"]) {
                case "Utility":
                    utilityCount += 2
                    cellsUsed.push("Utility")
                    break;
                case "Technique":
                    techniqueCount += 2
                    cellsUsed.push("Technique")
                    break;
                case "Mobility":
                    mobilityCount += 2
                    cellsUsed.push("Mobility")
                    break;
                case "Power":
                    powerCount += 2
                    cellsUsed.push("Power")
                    break;
                case "Defensive":
                    defensiveCount += 2
                    cellsUsed.push("Defensive")
                    break;
            }
        }
        else if (desiredPerks[i]["level"] > 0) {
            console.log(`${desiredPerks[i]["name"]} requires one perk slot.`)
            totalPerkSlotsUsed++
            switch (desiredPerks[i]["type"]) {
                case "Utility":
                    utilityCount++
                    cellsUsed.push("Utility")
                    break;
                case "Technique":
                    techniqueCount++
                    cellsUsed.push("Technique")
                    break;
                case "Mobility":
                    mobilityCount++
                    cellsUsed.push("Mobility")
                    break;
                case "Power":
                    powerCount++
                    cellsUsed.push("Power")
                    break;
                case "Defensive":
                    defensiveCount++
                    cellsUsed.push("Defensive")
                    break;
            }
        }
    }
}

/*
Here the program is removing the weapon and lantern from the perk cellCounts.
The program should look at the weapon and determine what cellCounts are being used and make the appropriate
deductions from the counts which were created above.

Currently the program requires it be done manually, but ideally there should be some logic that takes user weapon input
and deducts weapon cells from the counts automatically based on the database information.
*/
utilityCount-- //Lantern always has one utility cell, so it is subtracted from the required count here.
if (usingRepeaters) {
    console.log("Using Repeaters: " + true)
    techniqueCount--
    mobilityCount = 0 //Find a better way to do this. Will cause bugs if someone WANTS a 6/6 mobility perk.
}
else {
    //If user's weapon has two power cells and one power perk, subtract 3 from the powerCount.
    powerCount -= 3
}

cellsUsed = [...new Set(cellsUsed)] //removes duplicate cell entries
console.log(cellsUsed)

if (totalPerkSlotsUsed < maxPerkSlots) {
    console.log(`You still have ${maxPerkSlots - totalPerkSlotsUsed} perk slot(s) available ${totalPerkSlotsUsed}/${maxPerkSlots}.
    \nYou can increase a perk's level to be above 3 or add a new perk.`)
}
else if (totalPerkSlotsUsed > maxPerkSlots) {
    console.log(`${totalPerkSlotsUsed - maxPerkSlots} too many perk slot(s) in use ${totalPerkSlotsUsed}/${maxPerkSlots}.
    \nYou must decrease a perk's level or remove a perk.`)
}
console.log(`Required Cells: `)
console.log(`Utility: ${utilityCount}`)
console.log(`Technique: ${techniqueCount}`)
console.log(`Mobility: ${mobilityCount}`)
console.log(`Power: ${powerCount}`)
console.log(`Defensive: ${defensiveCount}`)

//There's probably a way to achieve the result below in a single for loop.
const potentialHeadArmour = [], potentialTorsoArmour = [], potentialArmsArmour = [], potentialLegsArmour = []
for (let i = 0; i < head.length; i++) {
    for (let j = 0; j < totalUniquePerks; j++) {
        if (desiredPerks[j]["name"].includes(head[i].perk) && cellsUsed.includes(head[i].cell)) {
            potentialHeadArmour.push(head[i])
        }
        
    }
}
for (let i = 0; i < torso.length; i++) {
    for (let j = 0; j < totalUniquePerks; j++) {
        if (desiredPerks[j]["name"].includes(torso[i].perk) && cellsUsed.includes(torso[i].cell)) {
            potentialTorsoArmour.push(torso[i])
        }
        
    }
}
for (let i = 0; i < arms.length; i++) {
    for (let j = 0; j < totalUniquePerks; j++) {
        if (desiredPerks[j]["name"].includes(arms[i].perk) && cellsUsed.includes(arms[i].cell)) {
            potentialArmsArmour.push(arms[i])
        }
        
    }
}
for (let i = 0; i < legs.length; i++) {
    for (let j = 0; j < totalUniquePerks; j++) {
        if (desiredPerks[j]["name"].includes(legs[i].perk) && cellsUsed.includes(legs[i].cell)) {
            potentialLegsArmour.push(legs[i])
        }
        
    }
}

console.log(potentialHeadArmour)
console.log(potentialTorsoArmour)
console.log(potentialArmsArmour)
console.log(potentialLegsArmour)

// Uses the four arrays created above to form a single array which contains every potential item combination.
const listOfPotentialArmour = []
potentialHeadArmour.forEach(headArmour => {
    potentialTorsoArmour.forEach(torsoArmour => {
        potentialArmsArmour.forEach(armsArmour => {
            potentialLegsArmour.forEach(legsArmour => {
                listOfPotentialArmour.push(headArmour, torsoArmour, armsArmour, legsArmour) //adds every possible item combo into a single array.
            })
        })
    })
})

/*
Splits the array created above into smaller 4-length arrays which are then filtered based on perk count.
If one of the smaller arrays has the exact amount of each perk type required, it is output as a possible loadout and the
found count of each cell is reset to zero. This is probably buggy, although I can't prove it since it works for every
test I've done.
*/
let i, loadoutArray = [], sliceSize = 4
for (let i = 0; i < listOfPotentialArmour.length; i += sliceSize) {
    loadoutArray = listOfPotentialArmour.slice(i, i + sliceSize)
    let techniqueFound = 0, utilityFound = 0, powerFound = 0, defensiveFound = 0, mobilityFound = 0
    loadoutArray.forEach(item => {
        if (item["perkCells"][0] === "Technique") {techniqueFound++}
        if (item["perkCells"][0] === "Utility") {utilityFound++}
        if (item["perkCells"][0] === "Power") {powerFound++}
        if (item["perkCells"][0] === "Defensive") {defensiveFound++}
        if (item["perkCells"][0] === "Mobility") {mobilityFound++}
        if (item["perkCells"][1] === "Technique") {techniqueFound++}
        if (item["perkCells"][1] === "Utility") {utilityFound++}
        if (item["perkCells"][1] === "Power") {powerFound++}
        if (item["perkCells"][1] === "Defensive") {defensiveFound++}
        if (item["perkCells"][1] === "Mobility") {mobilityFound++}
        if(techniqueCount === techniqueFound) {
            if (utilityCount === utilityFound) {
                if (powerCount === powerFound) {
                    if (defensiveCount === defensiveFound) {
                        if (mobilityCount === mobilityFound) {
                            console.log(`Loadout Possbility:`)
                            console.log(loadoutArray)
                            techniqueFound = 0
                            utilityFound = 0
                            powerFound = 0
                            defensiveFound = 0
                            mobilityFound = 0
                        }
                    }
                }
            }
        }
    })
}
