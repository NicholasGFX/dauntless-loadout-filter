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

//totalPerkSources = 12. Each armour piece can have two perks for a total of eight, a weapon can have three perks, and each lantern has one utility perk slot.
//Each perk has a max level of 3, meaning there is a max of 36 perk levels.
//Repeaters/exotic weapons and exotic head armour all have one less perk slot. Using any of them will lower totalPerkSources.
let totalPerkSources = 12
let sumOfMaximumPerkLevels = totalPerkSources * 3
let totalMaxedPerksAvailable = sumOfMaximumPerkLevels / 6

//Build-altering toggles. Explained in the comments above totalPerkSources.
let usingRepeaters = true
let usingExoticWeapon = false
let usingExoticHeadArmour = false
if (usingRepeaters || usingExoticWeapon || usingExoticHeadArmour) {
    if (usingRepeaters || usingExoticWeapon) {totalPerkSources--}
    if (usingExoticHeadArmour) {totalPerkSources--}
}

//User should only have to input their weapon and the perks they want. Nothing else should be required.
let userWeaponPerk =  "" //doesn't work yet
let userWeaponCells = "" //doesn't work yet
let desiredPerks = ["Iceborne", "Rage", "Wild Frenzy", "Aetheric Attunement", "Conduit"]

//Finds the number of each cell type used in the build. This is used later to filter out bad potential loadouts which have too much of a certain cell type.
let utilityCount = 0, techniqueCount = 0, mobilityCount = 0, powerCount = 0, defensiveCount = 0, cellsUsed = []
function findCellCounts() {
    utilityCount-- //lantern always has one utility cell. It is subtracted from the required count here.
    
    desiredPerks.forEach(perk => {
        if(perks.Defensive.includes(perk)) {
            cellsUsed.push("Defensive")
            defensiveCount += 2;
        }
        else if(perks.Mobility.includes(perk)) {
            cellsUsed.push("Mobility")
            mobilityCount += 2;
        }
        else if(perks.Power.includes(perk)) {
            cellsUsed.push("Power")
            powerCount += 2;
        }
        else if(perks.Technique.includes(perk)) {
            cellsUsed.push("Technique")
            techniqueCount += 2;
        }
        else if(perks.Utility.includes(perk)) {
            cellsUsed.push("Utility")
            utilityCount += 2;
        }
    })

    //////////////
    //DELETE THIS IF/ELSE BELOW AND WRITE SOME LOGIC THAT TAKES USER WEAPON INPUT AND SUBTRACTS THE APPROPRIATE CELLS FROM THEIR RESPECTIVE CELLCOUNTS
    /////////////
    if(usingRepeaters) {
        console.log("Using Repeaters: " + true)
        techniqueCount--
        mobilityCount = 0 //Find a better way to do this. Will cause bugs if someone WANTS a 6/6 mobility perk.
    }
    else {
        //The user's weapon has three power cells, so detract them from the count.
        //this assumes the user is not using repeaters and deducts the appropriate amount of count.
        powerCount -= 3
    }
    return cellsUsed = [...new Set(cellsUsed)]
}

findCellCounts()
console.log(`Desired Perks (6/6): ${desiredPerks}`)
console.log(`Required Cells: `)
console.log(`Utility: ${utilityCount}`)
console.log(`Technique: ${techniqueCount}`)
console.log(`Mobility: ${mobilityCount}`)
console.log(`Power: ${powerCount}`)
console.log(`Defensive: ${defensiveCount}`)

//iterates through helmets/chests/gloves/legs to find items which have a matching perk or cell type for the desired build. Fills up four arrays with all items
//which meet the criteria.
const potentialHeadArmour = [], potentialTorsoArmour = [], potentialArmsArmour = [], potentialLegsArmour = []
head.forEach(headArmour => { 
    if(desiredPerks.includes(headArmour.perk) && cellsUsed.includes(headArmour.cell)) {
        potentialHeadArmour.push(headArmour)
    }
})
torso.forEach(torsoArmour => {
    if(desiredPerks.includes(torsoArmour.perk) && cellsUsed.includes(torsoArmour.cell)) {
        potentialTorsoArmour.push(torsoArmour)
    }
})
arms.forEach(armsArmour => {
    if(desiredPerks.includes(armsArmour.perk) && cellsUsed.includes(armsArmour.cell)) {
        potentialArmsArmour.push(armsArmour)
    }
})
legs.forEach(legsArmour => {
    if(desiredPerks.includes(legsArmour.perk) && cellsUsed.includes(legsArmour.cell)) {
        potentialLegsArmour.push(legsArmour)
    }
})



//Creates an array of every potential item combination based on pieces of gear which have perks/cells that the desired build uses.
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

//splits the array created above into smaller 4-length arrays which are then filtered for perk count.
// It searches the perks to see how many it finds versus how many is needed in the build.
//If the correct amount of perk type is found across all four items in the array, it outputs the array as loadout possibility and resets the counts.
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