let day;
if (process.argv.length === 2) {
  const p = Bun.spawnSync(["date", `+%d`]);
  if (p.success) {
    day = p.stdout.toString().trim();
  }
} else {
  day = process.argv.at(2);
}

if (!day) throw "No day";

console.log(`Creating files for day ${day}`);

const sourceFile = Bun.file(".init/index.ts");
const sourceMain = Bun.file(".init/main.ts");
const sourceTest = Bun.file(".init/index.test.ts");

// https://gist.github.com/matthewsimo/88a6b494177ec7564516e12bc024ef15
Bun.spawn(["./getInput.sh", day]);
Bun.spawnSync(["mkdir", `${day}`]);
Bun.spawnSync(["touch", `${day}/index.ts`]);
Bun.spawnSync(["touch", `${day}/main.ts`]);
Bun.spawnSync(["touch", `${day}/index.test.ts`]);

const targetFile = Bun.file(`${day}/index.ts`);
const targetMain = Bun.file(`${day}/main.ts`);
const targetTest = Bun.file(`${day}/index.test.ts`);

await Bun.write(targetFile, await sourceFile.text());
await Bun.write(targetMain, (await sourceMain.text()).replaceAll("{day}", day));
await Bun.write(targetTest, sourceTest);
