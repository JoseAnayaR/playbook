const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   console.log("---------------------Ejercicio 2.1")
   explorers.forEach(explorers => console.log(explorers.name))
   console.log("---------------------Ejercicio 2.2")
   explorers.forEach(explorers => console.log(explorers.stack))
   console.log("---------------------Ejercicio 2.3")
   const newList = explorers.map(function(explorers){ return explorers.stack + explorers.stack})
  console.log(newList)
  console.log("----------------------Ejercicio 2.4")
  const explorersJs = explorers.filter((js) => js.stack.includes('js'))
  console.log(explorersJs)
  console.log("----------------------Ejercicio 2.5")
  const firstCdmx = explorers.find((explorer_cdmx) => explorer_cdmx.city === "CDMX")
  console.log(firstCdmx.name)
  console.log("----------------------Ejercicio 2.6")
  const completed = explorers.reduce((acc, completed_exercises) => acc + completed_exercises.exercises_completed, 0)
  console.log(completed)
  console.log("----------------------Ejercicio 2.7")
  const areSomeTrue = explorers.some((finishedTrue) =>  finishedTrue.missions.frontend.exercisesFinished === true)
  console.log(areSomeTrue)
  console.log("----------------------Ejercicio 2.8")
  const finished = explorers.every((boolFinished) => typeof boolFinished.missions.onboarding.isFinished === true)
  console.log(finished)