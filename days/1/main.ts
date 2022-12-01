const calorieEntries = await Deno.readTextFile("./calorie-entries.txt");

// Per-elf entries are divided by an extra newline
const calorieEntriesPerElf = calorieEntries.split(/\n\n/);

const totalCaloriesPerElfSortedAsc = calorieEntriesPerElf
  .map((entry) =>
    entry
      .split(/\n/) // Items are divided by a single newline
      .map(Number)
      .reduce((prev, curr) => prev + curr, 0)
  )
  .toSorted((a, b) => a - b);

const mostCaloriesCarried = totalCaloriesPerElfSortedAsc.at(-1);

if (mostCaloriesCarried === undefined) {
  console.log(`Are you sure there are any entries?`);
} else {
  console.log(
    `The elf carrying the most carries ${mostCaloriesCarried} calories.`
  );
}

const topThreeMostCaloriesCarriedCombined = totalCaloriesPerElfSortedAsc
  .slice(-3)
  .reduce((prev, curr) => prev + curr, 0);

console.log(
  `The top three elves together carry a total of ${topThreeMostCaloriesCarriedCombined} calories.`
);
