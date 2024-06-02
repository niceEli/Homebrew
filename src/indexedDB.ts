import Dexie, { type EntityTable } from "dexie";
import gameInfo from "./gameInfo";

interface Storage {
  key: string; // This prop will be used as primary key (see below)
  value: string;
}

const db = new Dexie(`${gameInfo.internalName}_db`) as Dexie & {
  storage: EntityTable<
    Storage,
    "key" // primary key "key" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  storage: "++key, value", // primary key "key" (for the runtime!)
});

export type { Storage };
export { db };

export default db;

globalThis.db = db;
