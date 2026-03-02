function crushedToRaw(ore, event) {
  const isZinc = ore == "zinc" ? "create:" : "minecraft:";
  event.replaceOutput(
    { output: `create:crushed_raw_${ore}` },
    `create:crushed_raw_${ore}`,
    `${isZinc}raw_${ore}`,
  );
  event.replaceInput(
    { input: `create:crushed_raw_${ore}` },
    `create:crushed_raw_${ore}`,
    `${isZinc}raw_${ore}`,
  );
}

ServerEvents.recipes((event) => {
  oreDusts.forEach((ore) => crushedToRaw(ore, event));
});
