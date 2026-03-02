function atmGearRecipe(gear, event) {
  event.smithing(
    `allthemodium:allthemodium_${gear}`,
    "allthemodium:allthemodium_upgrade_smithing_template",
    `advancednetherite:netherite_diamond_${gear}`,
    "allthemodium:allthemodium_ingot",
  );
}

function alloyToolsRecipe(tool, alloyA, alloyB, event) {
  event.smithing(
    `allthemodium:alloy_${tool == "pickaxe" ? "pick" : tool}`,
    `allthemodium:unobtainium_${tool}`,
    `allthemodium:${alloyA}`,
    `allthemodium:${alloyB}`,
  );
}

function minecraftTierUp(item, tier, event) {
  event.smithing(
    `allthemodium:${tier}_${item}`,
    `allthemodium:${tier}_upgrade_smithing_template`,
    `minecraft:${item}`,
    `allthemodium:${tier}_ingot`,
  );
}

ServerEvents.recipes((event) => {
  atmGear.forEach((gear) => atmGearRecipe(gear, event));

  alloyToolsRecipe(atmGear[0], atmAlloys.VA, atmAlloys.UV, event);
  alloyToolsRecipe(atmGear[1], atmAlloys.VA, atmAlloys.UA, event);
  alloyToolsRecipe(atmGear[2], atmAlloys.VA, atmAlloys.UA, event);
  alloyToolsRecipe(atmGear[3], atmAlloys.UA, atmAlloys.UV, event);

  event.smithing(
    "allthemodium:alloy_trident",
    "minecraft:trident",
    `allthemodium:${atmAlloys.UA}`,
    `allthemodium:${atmAlloys.UV}`,
  );

  event.smithing(
    "allthemodium:alloy_paxel",
    "allthemodium:alloy_axe",
    "allthemodium:alloy_pick",
    "allthemodium:alloy_shovel",
  );

  minecraftTierUp("bow", tiers.allthemodium, event);
  minecraftTierUp("shield", tiers.vibranium, event);
  minecraftTierUp("crossbow", tiers.unobtainium, event);
});
