function hammerOreDoubling(ore, event) {
  const isZinc = ore == "zinc" ? "create:" : "minecraft:";
  event.shapeless(Item.of(`alltheores:${ore}_dust`, 2), [
    "#alltheores:ore_hammers",
    `${isZinc}raw_${ore}`,
  ]);
}

ServerEvents.recipes((event) => {
  oreDusts.forEach((ore) => hammerOreDoubling(ore, event));

  event.blasting(
    "allthemodium:unobtainium_allthemodium_alloy_ingot",
    "allthemodium:unobtainium_allthemodium_alloy_dust",
  );
  event.blasting(
    "allthemodium:unobtainium_vibranium_alloy_ingot",
    "allthemodium:unobtainium_vibranium_alloy_dust",
  );
  event.blasting(
    "allthemodium:vibranium_allthemodium_alloy_ingot",
    "allthemodium:vibranium_allthemodium_alloy_dust",
  );
});
