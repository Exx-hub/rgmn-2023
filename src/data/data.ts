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
    title: "Jump Squats",
    image: "jumping-squat_ypz1hy.gif",
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
    title: "Side Lunges",
    image: "side-lunge_c51xry.gif",
  },
  {
    id: 15,
    title: "Knee Elbow Crunches",
    image: "knee-to-elbow-crunches_banasb.gif",
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
    title: "Squats",
    image: "squats_p17kzj.gif",
  },
  {
    id: 20,
    title: "V-ups",
    image: "v-up_yel3ku.gif",
  },
  {
    id: 21,
    title: "Bicycle Crunches",
    image: "bicycle-crunches_ecfszr.gif",
  },
  {
    id: 22,
    title: "Squat Jumps",
    image: "jumping-squats_pvqusg.gif",
  },
  {
    id: 23,
    title: "Russian Twists",
    image: "russian-twist_bp4imo.gif",
  },
  {
    // fitness
    id: 24,
    title: "Decline Pushups",
    image: "decline-pushups_ulcx1q.gif",
  },
  {
    id: 25,
    title: "Spiderman Pushups",
    image: "spiderman-pushups_t0dnvx.gif",
  },
  {
    id: 26,
    title: "Diamond Pushups",
    image: "diamond-pushups_oevlyo.gif",
  },
  {
    id: 27,
    title: "Pushups and Rotate",
    image: "pushup-and-rotate_zj2tuw.gif",
  },
  {
    id: 28,
    title: "Burpees",
    image: "burpees_o1sfp9.gif",
  },
  {
    id: 29,
    title: "Heel Touches",
    image: "heel-touches_hmwlwp.gif",
  },
  {
    id: 30,
    title: "Walking Plank",
    image: "walking-plank_i6ryxj.gif",
  },
];

export const exerciseSets = {
  bodybuilding: {
    beginner: [
      ["burpees", 20],
      ["decline-pushups", 20],
      ["spiderman-pushups", 20],
      ["diamond-pushups", 20],
      ["pushup-and-rotate", 20],
    ],
    competitive: [
      ["spiderman-pushups", 30],
      ["burpees", 30],
      ["diamond-pushups", 30],
      ["decline-pushups", 30],
      ["pushup-and-rotate", 30],
    ],
    pro: [
      ["diamond-pushups", 40],
      ["burpees", 40],
      ["spiderman-pushups", 40],
      ["decline-pushups", 40],
      ["pushup-and-rotate", 40],
    ],
  },
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
  fitness: {
    beginner: [
      ["jumping-squat", 20],
      ["heel-touches", 20],
      ["walking-plank", 20],
      ["side-lunge", 20],
      ["knee-to-elbow-crunches", 20],
    ],
    competitive: [
      ["walking-plank", 30],
      ["jumping-squat", 30],
      ["side-lunge", 30],
      ["heel-touches", 30],
      ["knee-to-elbow-crunches", 30],
    ],
    pro: [
      ["side-lunge", 40],
      ["jumping-squat", 40],
      ["walking-plank", 40],
      ["heel-touches", 40],
      ["knee-to-elbow-crunches", 40],
    ],
  },
  crossfit: {
    beginner: [
      ["squats", 20],
      ["v-up", 20],
      ["bicycle-crunches", 20],
      ["jumping-squats", 20],
      ["russian-twist", 20],
    ],
    competitive: [
      ["bicycle-crunches", 30],
      ["squats", 30],
      ["jumping-squats", 30],
      ["v-up", 30],
      ["russian-twist", 30],
    ],
    pro: [
      ["jumping-squats", 40],
      ["squats", 40],
      ["bicycle-crunches", 40],
      ["v-up", 40],
      ["russian-twist", 40],
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
