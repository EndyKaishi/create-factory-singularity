function atmGearRemove(gear, event) {
  event.remove({
    input: `minecraft:netherite_${gear}`,
    output: `allthemodium:allthemodium_${gear}`,
  });
}

ServerEvents.recipes((event) => {
  atmGear.forEach((gear) => {
    atmGearRemove(gear, event);
  });
  event.remove({ mod: "alltheores" });
});
