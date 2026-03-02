ServerEvents.recipes((event) => {
  for (const ore of moltenOres)
    event.recipes.create
      .mixing(Fluid.of(ore.output, ore.amount), ore.input)
      .superheated();

  for (const alloy of alloyMixes)
    event.recipes.create
      .mixing(alloy.output, [
        Fluid.of(alloy.input[0], alloy.amount),
        Fluid.of(alloy.input[1], alloy.amount),
      ])
      .superheated();

  event.recipes.create
    .mixing(Fluid.of("allthemodium:soul_lava", 1000), [
      Fluid.of("allthemodium:soul_lava", 500),
      Fluid.of("minecraft:lava", 500),
    ])
    .superheated();

  for (const ancient of ancientMix)
    event.recipes.create.mixing(ancient.output, [
      Fluid.of("allthemodium:soul_lava", 20),
      ancient.input,
    ]);

  event.recipes.create.mixing("create:shadow_steel_casing", [
    "blazinghot:sturdy_casing",
    "create:shadow_steel",
  ]);
  event.recipes.create.mixing("create:refined_radiance_casing", [
    "blazinghot:blaze_casing",
    "create:refined_radiance",
  ]);
});
