// schedules/wec-data.js
// Data-only soubor – žádná logika
// Timezone: Europe/Prague

export const WEC_WEEKENDS = [

  {
    slug: "wec_imola_2026",
    name: "6 Hours of Imola",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-04-17 10:15" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-04-17 15:15" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-04-18 10:30" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-04-18 14:30" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-04-18 14:50" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-04-18 15:10" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-04-18 15:30" },
      { slug: "race", label: "Race", datetime: "2026-04-19 13:00" },
    ],
  },

  {
    slug: "wec_spa_2026",
    name: "6 Hours of Spa-Francorchamps",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-05-07 11:00" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-05-07 15:40" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-05-08 10:10" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-05-08 14:30" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-05-08 14:55" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-05-08 15:20" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-05-08 15:45" },
      { slug: "race", label: "Race", datetime: "2026-05-09 14:00" },
    ],
  },

  {
    slug: "wec_le_mans_2026",
    name: "24 Hours of Le Mans",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-06-10 16:00" },
      { slug: "qual_lmp2_lmgt3", label: "Qualifying - LMP2 & LMGT3", datetime: "2026-06-10 20:45" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-06-10 21:30" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-06-11 00:00" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-06-11 16:45" },
      { slug: "hyperpole1_lmp2_lmgt3", label: "Hyperpole 1 - LMP2 & LMGT3", datetime: "2026-06-11 22:00" },
      { slug: "hyperpole2_lmp2_lmgt3", label: "Hyperpole 2 - LMP2 & LMGT3", datetime: "2026-06-11 22:35" },
      { slug: "hyperpole1_hypercar", label: "Hyperpole 1 - HYPERCAR", datetime: "2026-06-11 23:05" },
      { slug: "hyperpole2_hypercar", label: "Hyperpole 2 - HYPERCAR", datetime: "2026-06-11 23:40" },
      { slug: "fp4", label: "Free Practice 4", datetime: "2026-06-12 01:00" },
      { slug: "warmup", label: "Warm-up", datetime: "2026-06-13 14:00" },
      { slug: "race", label: "Race", datetime: "2026-06-13 18:00" },
    ],
  },

  {
    slug: "wec_interlagos_2026",
    name: "6 Hours of São Paulo",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-07-10 16:00" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-07-10 20:45" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-07-11 15:10" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-07-11 19:45" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-07-11 20:05" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-07-11 20:25" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-07-11 20:45" },
      { slug: "race", label: "Race", datetime: "2026-07-12 16:30" },
    ],
  },

  {
    slug: "wec_cota_2026",
    name: "Lone Star Le Mans",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-09-04 18:30" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-09-04 23:30" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-09-05 18:00" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-09-05 22:00" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-09-05 22:20" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-09-05 22:40" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-09-05 23:00" },
      { slug: "race", label: "Race", datetime: "2026-09-06 20:00" },
    ],
  },

  {
    slug: "wec_fuji_2026",
    name: "6 Hours of Fuji",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-09-25 03:15" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-09-25 07:30" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-09-26 02:50" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-09-26 07:20" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-09-26 07:40" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-09-26 08:00" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-09-26 08:20" },
      { slug: "race", label: "Race", datetime: "2026-09-27 04:00" },
    ],
  },

  {
    slug: "wec_qatar_2026",
    name: "Qatar 1812km",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-10-22 14:00" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-10-22 18:30" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-10-23 12:00" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-10-23 16:00" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-10-23 16:20" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-10-23 16:40" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-10-23 17:00" },
      { slug: "race", label: "Race", datetime: "2026-10-24 12:00" },
    ],
  },

  {
    slug: "wec_bahrain_2026",
    name: "8 Hours of Bahrain",
    sessions: [
      { slug: "fp1", label: "Free Practice 1", datetime: "2026-11-05 10:15" },
      { slug: "fp2", label: "Free Practice 2", datetime: "2026-11-05 15:00" },
      { slug: "fp3", label: "Free Practice 3", datetime: "2026-11-06 10:00" },
      { slug: "qual_lmgt3", label: "Qualifying - LMGT3", datetime: "2026-11-06 14:00" },
      { slug: "hyperpole_lmgt3", label: "Hyperpole - LMGT3", datetime: "2026-11-06 14:20" },
      { slug: "qual_hypercar", label: "Qualifying - HYPERCAR", datetime: "2026-11-06 14:40" },
      { slug: "hyperpole_hypercar", label: "Hyperpole - HYPERCAR", datetime: "2026-11-06 15:00" },
      { slug: "race", label: "Race", datetime: "2026-11-07 12:00" },
    ],
  },

];
