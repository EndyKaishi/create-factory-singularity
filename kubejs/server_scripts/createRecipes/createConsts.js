const atmOres = [
  {
    ore: "allthemodium:allthemodium_ore",
    raw: "allthemodium:raw_allthemodium",
    chance: 0.4,
  },
  {
    ore: "allthemodium:allthemodium_slate_ore",
    raw: "allthemodium:raw_allthemodium",
    chance: 0.6,
  },
  {
    ore: "allthemodium:vibranium_ore",
    raw: "allthemodium:raw_vibranium",
    chance: 0.3,
  },
  {
    ore: "allthemodium:other_vibranium_ore",
    raw: "allthemodium:raw_vibranium",
    chance: 0.5,
  },
  {
    ore: "allthemodium:unobtainium_ore",
    raw: "allthemodium:raw_unobtainium",
    chance: 0.4,
  },
];

const oreDoubleChances = [
  {
    input: "allthemodium:raw_allthemodium",
    output: "allthemodium:allthemodium_dust",
    chance: 0.4,
  },
  {
    input: "allthemodium:raw_vibranium",
    output: "allthemodium:vibranium_dust",
    chance: 0.3,
  },
  {
    input: "allthemodium:raw_unobtainium",
    output: "allthemodium:unobtainium_dust",
    chance: 0.2,
  },
  {
    input: "minecraft:raw_iron",
    output: "alltheores:iron_dust",
    chance: 0.6,
  },
  {
    input: "minecraft:raw_gold",
    output: "alltheores:gold_dust",
    chance: 0.5,
  },
  {
    input: "minecraft:raw_copper",
    output: "alltheores:copper_dust",
    chance: 0.8,
  },
  {
    input: "create:raw_zinc",
    output: "alltheores:zinc_dust",
    chance: 0.6,
  },
];

const moltenOres = [
  {
    input: "allthemodium:allthemodium_dust",
    output: "allthemodium:molten_allthemodium",
    amount: 90,
  },
  {
    input: "allthemodium:vibranium_dust",
    output: "allthemodium:molten_vibranium",
    amount: 90,
  },
  {
    input: "allthemodium:unobtainium_dust",
    output: "allthemodium:molten_unobtainium",
    amount: 90,
  },
  {
    input: "allthemodium:allthemodium_ingot",
    output: "allthemodium:molten_allthemodium",
    amount: 90,
  },
  {
    input: "allthemodium:vibranium_ingot",
    output: "allthemodium:molten_vibranium",
    amount: 90,
  },
  {
    input: "allthemodium:unobtainium_ingot",
    output: "allthemodium:molten_unobtainium",
    amount: 90,
  },
  {
    input: "alltheores:iron_dust",
    output: "blazinghot:molten_iron",
    amount: 90,
  },
  {
    input: "alltheores:gold_dust",
    output: "blazinghot:molten_gold",
    amount: 90,
  },
  {
    input: "alltheores:copper_dust",
    output: "blazinghot:molten_copper",
    amount: 90,
  },
  {
    input: "alltheores:zinc_dust",
    output: "blazinghot:molten_zinc",
    amount: 90,
  },
];

const alloyMixes = [
  {
    input: [
      "allthemodium:molten_allthemodium",
      "allthemodium:molten_vibranium",
    ],
    amount: 90,
    output: "allthemodium:vibranium_allthemodium_alloy_dust",
  },
  {
    input: [
      "allthemodium:molten_allthemodium",
      "allthemodium:molten_unobtainium",
    ],
    amount: 90,
    output: "allthemodium:unobtainium_allthemodium_alloy_dust",
  },
  {
    input: ["allthemodium:molten_vibranium", "allthemodium:molten_unobtainium"],
    amount: 90,
    output: "allthemodium:unobtainium_vibranium_alloy_dust",
  },
];

const ancientMix = [
  {
    input: "minecraft:blackstone",
    output: "allthemodium:ancient_stone",
  },
  {
    input: "minecraft:soul_soil",
    output: "allthemodium:ancient_dirt",
  },
  {
    input: "minecraft:warped_nylium",
    output: "allthemodium:ancient_grass",
  },
  {
    input: "minecraft:fern",
    output: "allthemodium:ancient_fern",
  },
  {
    input: "minecraft:glow_berries",
    output: "allthemodium:ancient_soulberries",
  },
];
