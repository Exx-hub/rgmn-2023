export const allExerciseList = [
  {
    id: 1,
    title: "Run Jab Jab",
    image: "run-jab-jab_lcydzs.gif",
  },
  {
    id: 2,
    title: "Jab Cross Knee",
    image: "jab-cross-knee_n59aiq.gif",
  },
  {
    id: 3,
    title: "Jump Squat Run",
    image: "jump-squat-run_h6oqvv.gif",
  },
  {
    id: 4,
    title: "Hip Flexor Stretch",
    image: "hip-flexor-stretch_lsm3wq.gif",
  },
  {
    id: 5,
    title: "Twisting Knee Plank",
    image: "twisting-knee-plank_joi7f9.gif",
  },
  {
    id: 6,
    title: "Back Balances",
    image: "back-balances_c8hxyi.gif",
  },
  {
    id: 7,
    title: "Crunch Diagonals",
    image: "crunch-diagonals_cjv5fw.gif",
  },
  {
    id: 8,
    title: "One-on-One Crunches",
    image: "one-on-one-crunches_hveybh.gif",
  },
  {
    id: 9,
    title: "Reachouts",
    image: "reachouts_hw4qqm.gif",
  },
  {
    id: 10,
    title: "Twist Candle Crunches",
    image: "twist-candle-crunches_tqnd6f.gif",
  },
  {
    id: 11,
    title: "Shoulder Press",
    image: "shoulder-press_vr0j8a.gif",
  },
  {
    id: 12,
    title: "Kettlebell Presses",
    image: "kettlebell-presses_dvi6sj.gif",
  },
  {
    id: 13,
    title: "Kettlebell Squat Press",
    image: "kettlebell-squat-press_dwkfyy.gif",
  },
  {
    id: 14,
    title: "Medball Chest Press",
    image: "medball-chest-press_vvb0tv.gif",
  },
  {
    id: 15,
    title: "Tricep Extensions",
    image: "tricep-extensions_njpj8q.gif",
  },
  {
    id: 16,
    title: "Clean and Press",
    image: "clean-and-press_tr9r1k.gif",
  },
  {
    id: 17,
    title: "Dumbbell Cleans",
    image: "db-cleans_phtm8v.gif",
  },
  {
    id: 18,
    title: "Hinge Hammer Curls",
    image: "hinge-hammer-curls_luoobg.gif",
  },
  {
    id: 19,
    title: "Air Squats",
    image: "air-squats_wmfktd.gif",
  },
  {
    id: 20,
    title: "Burpee Pushup",
    image: "burpee-pushup_mlay7v.gif",
  },
  {
    id: 21,
    title: "High Jumps",
    image: "high-jumps_ag8rky.gif",
  },
  {
    id: 22,
    title: "Squat Jumps",
    image: "squat-jumps_bt8di9.gif",
  },
  {
    id: 23,
    title: "Oblique Twists",
    image: "oblique-twists_kttzkd.gif",
  },
  {
    id: 24,
    title: "Jump Rope",
    image: "jump-rope_ffswyu.gif",
  },
  {
    id: 25,
    title: "Pushups",
    image: "pushups_qty481.gif",
  },
  {
    id: 26,
    title: "Knee Elbow Situps",
    image: "knee-elbow-situps_pkhdi3.gif",
  },
  {
    id: 27,
    title: "Bicycle Kicks",
    image: "bicycle-kicks_ralnn5.gif",
  },
  {
    id: 28,
    title: "Mountain Climbers",
    image: "mountain-climbers_cz2inm.gif",
  },
];

export const exerciseSets = {
  boxing: {
    beginner: [
      ["run-jab-jab", 20],
      ["hip-flexor-stretch", 20],
      ["jump-squat-run", 20],
      ["jab-cross-knee", 20],
      ["twisting-knee-plank", 20],
    ],
    competitive: [
      ["jump-squat-run", 30],
      ["run-jab-jab", 30],
      ["jab-cross-knee", 30],
      ["hip-flexor-stretch", 30],
      ["twisting-knee-plank", 30],
    ],
    pro: [
      ["jab-cross-knee", 40],
      ["run-jab-jab", 40],
      ["jump-squat-run", 40],
      ["hip-flexor-stretch", 40],
      ["twisting-knee-plank", 40],
    ],
  },
  mma: {
    beginner: [
      ["back-balances", 20],
      ["crunch-diagonals", 20],
      ["one-on-one-crunches", 20],
      ["reachouts", 20],
      ["twist-candle-crunches", 20],
    ],
    competitive: [
      ["twist-candle-crunches", 30],
      ["one-on-one-crunches", 30],
      ["back-balances", 30],
      ["reachouts", 30],
      ["crunch-diagonals", 30],
    ],
    pro: [
      ["reachouts", 40],
      ["back-balances", 40],
      ["one-on-one-crunches", 40],
      ["twist-candle-crunches", 40],
      ["crunch-diagonals", 40],
    ],
  },
  bodybuilding: {
    beginner: [
      ["shoulder-press", 20],
      ["kettlebell-presses", 20],
      ["kettlebell-squat-press", 20],
      ["medball-chest-press", 20],
      ["tricep-extensions", 20],
    ],
    competitive: [
      ["kettlebell-squat-press", 30],
      ["shoulder-press", 30],
      ["medball-chest-press", 30],
      ["kettlebell-presses", 30],
      ["tricep-extensions", 30],
    ],
    pro: [
      ["medball-chest-press", 40],
      ["shoulder-press", 40],
      ["kettlebell-squat-press", 40],
      ["kettlebell-presses", 40],
      ["tricep-extensions", 40],
    ],
  },
  powerlifting: {
    beginner: [
      ["clean-and-press", 20],
      ["db-cleans", 20],
      ["kettlebell-squat-press", 20],
      ["hinge-hammer-curls", 20],
      ["kettlebell-presses", 20],
    ],
    competitive: [
      ["kettlebell-squat-press", 30],
      ["clean-and-press", 30],
      ["hinge-hammer-curls", 30],
      ["db-cleans", 30],
      ["kettlebell-presses", 30],
    ],
    pro: [
      ["hinge-hammer-curls", 40],
      ["clean-and-press", 40],
      ["kettlebell-squat-press", 40],
      ["db-cleans", 40],
      ["kettlebell-presses", 40],
    ],
  },
  crossfit: {
    beginner: [
      ["air-squats", 20],
      ["burpee-pushup", 20],
      ["high-jumps", 20],
      ["squat-jumps", 20],
      ["oblique-twists", 20],
    ],
    competitive: [
      ["high-jumps", 30],
      ["air-squats", 30],
      ["squat-jumps", 30],
      ["burpee-pushup", 30],
      ["oblique-twists", 30],
    ],
    pro: [
      ["squat-jumps", 40],
      ["air-squats", 40],
      ["high-jumps", 40],
      ["burpee-pushup", 40],
      ["oblique-twists", 40],
    ],
  },
  fitness: {
    beginner: [
      ["jump-rope", 20],
      ["pushups", 20],
      ["knee-elbow-situps", 20],
      ["bicycle-kicks", 20],
      ["mountain-climbers", 20],
    ],
    competitive: [
      ["knee-elbow-situps", 30],
      ["jump-rope", 30],
      ["bicycle-kicks", 30],
      ["pushups", 30],
      ["mountain-climbers", 30],
    ],
    pro: [
      ["bicycle-kicks", 40],
      ["jump-rope", 40],
      ["knee-elbow-situps", 40],
      ["pushups", 40],
      ["mountain-climbers", 40],
    ],
  },
};

// const selectWorkouts = (part, difficulty) => {
//   const imageUrl = "https://res.cloudinary.com/snapify/image/upload/flexin/"

//   // validations
//   if (!part || !difficulty) return []
//   if (!workouts[part] || !workouts[part][difficulty]) {
//     return []
//   }

//   const mapped = workouts[part][difficulty].map((item) => {
//     const [name, longevity] = item
//     const workout = allWorkouts.find((item) => item.image === name)

//     return { ...workout, image: imageUrl + workout.image, longevity }
//   })
//   return mapped
// }

// https://res.cloudinary.com/dmcl7ol1o/image/upload
