export const allExerciseList = [
  {
    id: 1,
    title: "Run Jab Jab",
    image: "run-jab-jab",
  },
  {
    id: 2,
    title: "Jab Cross Knee",
    image: "jab-cross-knee",
  },
  {
    id: 3,
    title: "Jump Squat Run",
    image: "jump-squat-run",
  },
  {
    id: 4,
    title: "Hip Flexor Stretch",
    image: "hip-flexor-stretch",
  },
  {
    id: 5,
    title: "Twisting Knee Plank",
    image: "twisting-knee-plank",
  },
  {
    id: 6,
    title: "Back Balances",
    image: "back-balances",
  },
  {
    id: 7,
    title: "Crunch Diagonals",
    image: "crunch-diagonals",
  },
  {
    id: 8,
    title: "One-on-One Crunches",
    image: "one-on-one-crunches",
  },
  {
    id: 9,
    title: "Reachouts",
    image: "reachouts",
  },
  {
    id: 10,
    title: "Twist Candle Crunches",
    image: "twist-candle-crunches",
  },
  {
    id: 11,
    title: "Shoulder Press",
    image: "shoulder-press",
  },
  {
    id: 12,
    title: "Kettlebell Presses",
    image: "kettlebell-presses",
  },
  {
    id: 13,
    title: "Kettlebell Squat Press",
    image: "kettlebell-squat-press",
  },
  {
    id: 14,
    title: "Medball Chest Press",
    image: "medball-chest-press",
  },
  {
    id: 15,
    title: "Tricep Extensions",
    image: "tricep-extensions",
  },
  {
    id: 16,
    title: "Clean and Press",
    image: "barbel-clean-and-press",
  },
  {
    id: 17,
    title: "Dumbbell Cleans",
    image: "db-cleans",
  },
  {
    id: 18,
    title: "Hinge Hammer Curls",
    image: "hinge-hammer-curls",
  },
  {
    id: 19,
    title: "Air Squats",
    image: "air-squats",
  },
  {
    id: 20,
    title: "Burpee Pushup",
    image: "burpee-pushup",
  },
  {
    id: 21,
    title: "High Jumps",
    image: "high-jump",
  },
  {
    id: 22,
    title: "Squat Jumps",
    image: "squat-jumps",
  },
  {
    id: 23,
    title: "Oblique Twists",
    image: "oblique-twists",
  },
  {
    id: 24,
    title: "Jump Rope",
    image: "jump-rope",
  },
  {
    id: 25,
    title: "Pushups",
    image: "pushups",
  },
  {
    id: 26,
    title: "Knee Elbow Situps",
    image: "knee-elbow-situps",
  },
  {
    id: 27,
    title: "Bicycle Kicks",
    image: "bicycle-kicks",
  },
  {
    id: 28,
    title: "Mountain Climbers",
    image: "mountain-climbers",
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
      ["barbel-clean-and-press", 20],
      ["db-cleans", 20],
      ["kettlebell-squat-press", 20],
      ["hinge-hammer-curls", 20],
      ["kettlebell-presses", 20],
    ],
    competitive: [
      ["kettlebell-squat-press", 30],
      ["barbel-clean-and-press", 30],
      ["hinge-hammer-curls", 30],
      ["db-cleans", 30],
      ["kettlebell-presses", 30],
    ],
    pro: [
      ["hinge-hammer-curls", 40],
      ["barbel-clean-and-press", 40],
      ["kettlebell-squat-press", 40],
      ["db-cleans", 40],
      ["kettlebell-presses", 40],
    ],
  },
  crossfit: {
    beginner: [
      ["air-squats", 20],
      ["burpee-pushup", 20],
      ["high-jump", 20],
      ["squat-jumps", 20],
      ["oblique-twists", 20],
    ],
    competitive: [
      ["high-jump", 30],
      ["air-squats", 30],
      ["squat-jumps", 30],
      ["burpee-pushup", 30],
      ["oblique-twists", 30],
    ],
    pro: [
      ["squat-jumps", 40],
      ["air-squats", 40],
      ["high-jump", 40],
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
