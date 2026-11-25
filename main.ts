// The plant's grievance: named Fern, then upstaged by a real fern next door.
// One star, one line, under 280 characters — the fern gets the praise,
// this plant does the photosynthesis.
import { writeFileSync } from "node:fs";

const line =
  "One star. She named me Fern, then planted a real fern next to me, " +
  "and now guests compliment the fern while I do all the photosynthesizing.";

writeFileSync("/output/entry.txt", line);
