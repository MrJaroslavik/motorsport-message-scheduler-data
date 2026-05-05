// schedules/lemanscup-data.js
// Data-only soubor – žádná logika

export const LEMANSCUP_WEEKENDS = [

  {
    slug: "lmc_le_mans_2026",
    name: "Circuit de la Sarthe (Road to Le Mans)",
    link: "https://www.lemanscup.com/en/race/road-to-le-mans-2026",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-06-10" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-06-10" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-06-11" },
      { slug: "race1", label: "Race 1", datetime: "2026-06-11" },
    ],
  },

  {
    slug: "lmc_spa_2026",
    name: "Circuit de Spa-Francorchamps",
    link: "https://www.lemanscup.com/en/race/spa-francorchamps-round-2026",
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
    link: "https://www.lemanscup.com/en/race/silverstone-round-2026",
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
    link: "https://www.lemanscup.com/en/race/portimao-round-2026",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-10-09" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-10-09" },
      { slug: "qualifying", label: "Qualifying", datetime: "2026-10-10" },
      { slug: "race", label: "Race", datetime: "2026-10-10" },
    ],
  },
];
