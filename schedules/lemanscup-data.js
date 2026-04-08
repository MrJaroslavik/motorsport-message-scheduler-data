// schedules/lemanscup-data.js
// Data-only soubor – žádná logika

export const LEMANSCUP_WEEKENDS = [
  {
    slug: "lmc_barcelona_2026",
    name: "Circuit de Barcelona-Catalunya",
    sessions: [
      // Pátek 10. dubna
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-04-10 09:50" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-04-10 17:35" },
      // Sobota 11. dubna
      { slug: "qualifying_gt3", label: "Qualifying - GT3", datetime: "2026-04-11 12:30" },
      { slug: "qualifying_lmp3_proam", label: "Qualifying - LMP3 PRO/AM", datetime: "2026-04-11 12:55" },
      { slug: "qualifying_lmp3", label: "Qualifying - LMP3", datetime: "2026-04-11 13:20" },
      { slug: "race", label: "Race", datetime: "2026-04-11 18:20" },
    ],
  },

  {
    slug: "lmc_paul_ricard_2026",
    name: "Circuit Paul Ricard",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-05-01" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-05-01" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-05-02" },
      { slug: "race", label: "Race", datetime: "2026-05-02" },
    ],
  },

  {
    slug: "lmc_le_mans_2026",
    name: "Circuit de la Sarthe (Road to Le Mans)",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-06-10" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-06-11" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-06-11" },
      { slug: "race1", label: "Race 1", datetime: "2026-06-11" },
      { slug: "race2", label: "Race 2", datetime: "2026-06-12" },
    ],
  },

  {
    slug: "lmc_spa_2026",
    name: "Circuit de Spa-Francorchamps",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-08-21" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-08-21" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-08-22" },
      { slug: "race", label: "Race", datetime: "2026-08-22" },
    ],
  },

  {
    slug: "lmc_silverstone_2026",
    name: "Silverstone Circuit",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-09-11" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-09-11" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-09-12" },
      { slug: "race", label: "Race", datetime: "2026-09-12" },
    ],
  },

  {
    slug: "lmc_portimao_2026",
    name: "Algarve International Circuit",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-10-09" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-10-09" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-10-10" },
      { slug: "race", label: "Race", datetime: "2026-10-10" },
    ],
  },
];
