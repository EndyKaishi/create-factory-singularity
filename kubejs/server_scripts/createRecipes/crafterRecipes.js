ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting('avaritia:eternal_singularity', [
    '  A  ',
    ' BCD ',
    'EFGHI',
    ' JKL ',
    '  M  ',

  ],{
    A:'createcompression:compressed_obsidian_3x',
    B:'createcompression:compressed_netherite_3x',
    C:'createcompression:compressed_coal_3x',
    D:'createcompression:compressed_emerald_3x',
    E:'createcompression:compressed_redstone_3x',
    F:'createcompression:compressed_iron_3x',
    G:'createcompression:compressed_nether_star_1x',
    H:'createcompression:compressed_experience_3x',
    I:'createcompression:compressed_diamond_3x',
    J:'createcompression:compressed_gold_3x',
    K:'createcompression:compressed_copper_3x',
    L:'createcompression:compressed_lapis_3x',
    M:'createcompression:compressed_brass_3x',
  });
});