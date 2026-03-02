ServerEvents.recipes((event) => {
  for (const ore of atmOres)
    event.recipes.create.crushing(
      [
        ore.raw,
        CreateItem.of(ore.raw, ore.chance),
        CreateItem.of("create:experience_nugget", 0.75),
      ],
      ore.ore,
    );

  for (const ore of oreDoubleChances)
    event.recipes.create.crushing(
      [`2x ${ore.output}`, CreateItem.of(ore.output, ore.chance)],
      ore.input,
    );

  event.recipes.create.crushing(
    [
      CreateItem.of("allthemodium:allthemodium_nugget", 0.3),
      CreateItem.of("allthemodium:vibranium_nugget", 0.2),
      CreateItem.of("allthemodium:unobtainium_nugget", 0.1),
    ],
    "allthemodium:ancient_stone",
  );
});
