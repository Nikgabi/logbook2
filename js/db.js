

import Dexie from
"https://cdn.jsdelivr.net/npm/dexie@4/dist/dexie.mjs";

export const db =
new Dexie("LogBookDB");

db.version(4).stores({

   credentials:
   "++id, uid, certificationType, title",

   jobs:
   "++id, uid, organizationType, grade, startDate",

   conferences:
   "++id, uid, title, startDate",

   publications:
   "++id, uid, paper, authors, publicationType , notes_publ",

   trainings:
   "++id, uid, title, startDate"

});