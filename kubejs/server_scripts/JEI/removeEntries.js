RecipeViewerEvents.removeEntries("item", (event) => {
  /*tables.forEach((table) => {
        event.remove(`avaritia:${table}_crafting_table`);
    }
    );*/
  event.remove("avaritia:singularity");
  event.remove("avaritia:neutron_compressor");
  event.remove("avaritia:dense_neutron_compressor");
  event.remove("avaritia:denser_neutron_compressor");
  event.remove("avaritia:densest_neutron_compressor");
  event.remove("avaritia:compressed_chest");
  event.remove("avaritia:infinity_chest");
  event.remove("avaritia:infinity_upgrade");

  material.forEach((mat) => {
    gear.forEach((g) => {
      event.remove(`avaritia:${mat}_${g}`);
    });
  });

  alltheores.forEach((ore) => {
    alltheItems.forEach((item) => {
      event.remove(`alltheores:${ore}_${item}`);
    });
  });
  vanillaOres.forEach((ore) => {
    alltheItems.slice(0, 4).forEach((item) => {
      event.remove(`alltheores:${ore}_${item}`);
    });
  });
  alltheores.slice(0, 10).forEach((ore) => {
    oreVariants.forEach((variant) => {
      event.remove(`alltheores:${variant}${ore}_ore`);
    });
    event.remove(`alltheores:raw_${ore}_block`);
    event.remove(`alltheores:raw_${ore}`);
  });

  alltheExtras.forEach((extra) => {
    event.remove(`alltheores:${extra}_block`);
    event.remove(`alltheores:${extra}`);
    oreVariants.forEach((variant) => {
      event.remove(`alltheores:${variant}${extra}_ore`);
    });
  });
  alltheExtras.slice(0, 5).forEach((extra) => {
    event.remove(`alltheores:${extra}_dust`);
  });
  event.remove("alltheores:copper_nugget");
  event.remove("alltheores:bronze_ore_hammer");
  event.remove("alltheores:invar_ore_hammer");
  event.remove("alltheores:platinum_ore_hammer");
});
