import { Alert, Confirm, Prompt } from "./game-framework.js";

/**
 * Week 04 - Control Flow
 */

// Introduction
await Alert(
  "It seems like you have to get out of this forest fast. You only have 10 percent left on your phone. Let's make it count!"
);

let name = await Prompt("Before we begin, what is your name?");
name = name.trim() || "Traveler"; // Default name if empty

// Level 1
if (await Confirm(`Hi ${name}. Let's get out of this forest. Are you ready?`)) {
  await Alert("Great! Let's get started.");
} else {
  await Alert(
    "You hesitate and decide to play one last game on your phone. Time flies, and your phone dies. You're trapped in the dark forest, alone. Maybe you should be more prepared next time."
  );
  window.location.reload();
}

let pathChoice = (
  await Prompt(
    "You need to get out of this forest fast. Ahead of you are two paths. Should you go left or right?"
  )
)
  .toLowerCase()
  .trim();

if (pathChoice === "left") {
  let leftPathChoice = (
    await Prompt(
      "Going left, you start hearing strange noises. You push forward but suddenly hear shuffling from a nearby bush. Do you investigate or run? (Investigate/Run)"
    )
  )
    .toLowerCase()
    .trim();

  if (leftPathChoice === "investigate") {
    let bearChoice = (
      await Prompt(
        "You've clearly not watched many horror movies. Who walks towards a strange noise in a dark forest? A bear wielding a chainsaw appears! Do you trust them? (Yes/No)"
      )
    )
      .toLowerCase()
      .trim();

    if (bearChoice === "yes") {
      await Alert(
        "Really? You reach out your hand, and the bear scoffs. It then raises its chainsaw... Game Over."
      );
    } else {
      let finalChoice = await Prompt(
        "You wisely choose not to trust a chainsaw-wielding bear. Except he is still standing there with a chainsaw. Do you run, confront the bear, or try talking to it? (Run/Confront/Talk)"
      );

      if (finalChoice === "run") {
        await Alert(
          "You're really smart and you decided to run. Except don't forget that it was your choice to follow after some strange sound in the bushes! Your phone ran out of the battery and you tripped down the mountain, breaking all your bones. Ouch. Game Over."
        );
      } else if (finalChoice === "confront") {
        await Alert(
          "You stand your ground and beat the heck out of the bear. How dare he try to attack you with a chainsaw. Somehow you beat him and the chainsaw lays on the ground. You grabbed the chainsaw. You're the hunter now. You win!"
        );
      } else {
        await Alert(
          "You try reasoning with the bear. Sadly, it's not a Disney movie and the bear slashes you with his chainsaw. Game Over."
        );
      }
    }
  } else {
    await Alert(
      "You run in fear but trip and fall. The strange noises get closer... Game Over."
    );
  }
} else if (pathChoice === "right") {
  let rightPathChoice = await Confirm(
    "It feels like you're going the wrong direction. The right path leads to a river. Do you swim across?"
  );

  if (rightPathChoice) {
    await Alert(
      "You swim across safely and find your way out of the forest. You win!"
    );
  } else {
    await Alert(
      "You hesitate, night falls, and you remain lost forever. I thought you're trying to escape the forest. Guess you're not that smart after all, then again... You did decided to venture out at a forest by yourself. so were you ever smart in the first place? Game Over."
    );
  }
} else {
  await Alert(
    "Your hesitation costs you. Your phone dies, and you trip over a rock, tumbling down a hill. Game Over."
  );
}
