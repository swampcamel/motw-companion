export const hunterMoves = [
  {
    id: "hm-0",
    title: "Hunter Agenda",
    content: [
      "Act like you're the hero in this story (because you are).",
      "Make your own destiny.",
      "Find the damn monsters and stop them.",
      "Play your hunter like they're a real person."
    ]
  },
  {
    id: "hm-1",
    title: "Basic Moves: Kick Some Ass",
    content: {
      header: "When you get into a fight and kick some ass, roll +Tough.",
      list: [
        {
          title: "On a 7+",
          list: [
            "You and whatever you're fighting inflict harm on each other. The amount of harm is based on the established dangers in the game. That usually means you inflict the harm rating of your weapon and your enemy inflicts their attack's harm rating on you."
          ]
        },
        {
          title: "On a 10+",
          list: [
            "CHOOSE ONE EXTRA EFFECT:",
            "You gain the advantage: take +1 forward, or give +1 forward to another hunter.",
            "You suffer less harm (-1 harm).",
            "You force them where you want them."
          ]
        },
        {
          title: "ADVANCED: On a 12+",
          list: [
            "PICK AN ENHANCED EFFECT INSTEAD:",
            "You completely hold the advantage. All hunters involved in the fight get +1 forward.",
            "You suffer no harm at all.",
            "Your attack inflicts double the normal harm.",
            "Your attack drives the enemy away in a rout."
          ]
        }
      ]
    }
  },
  {
    id: "hm-2",
    title: "Basic Moves: Act Under Pressure",
    content: {
      header: "When you act under pressure, roll +Cool.",
      list: [
        {
          title: "On a 10+",
          list: ["You do what you set out to do."]
        },
        {
          title: "On a 7-9",
          list: ["The Keeper is going to give you a worse outcome, hard choice or price to pay."]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["You may choose to either do what you wanted and something extra, or do what you wanted to absolute perfection."]
        }
      ]
    }
  },
  {
    id: "hm-3",
    title: "Basic Moves: Help Out",
    content: {
      header: "When you help out another hunter, roll +Cool.",
      list: [
        {
          title: "On a 10+",
          list: ["Your help grants them +1 to their roll."]
        },
        {
          title: "On a 7-9",
          list: ["Your help grants them +1 to their roll, but you also expose yourself to trouble or danger."]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["Your help lets them act as if they just rolled a 12, regardless of what they actually got."]
        }
      ]
    }
  },
  {
    id: "hm-4",
    title: "Basic Moves: Investigate a Mystery",
    content: {
      header: "When you investigate a mystery, roll +Sharp.",
      list: [
        {
          title: "On a 10+",
          list: ["Hold 2"]
        },
        {
          title: "On a 7-9",
          list: ["Hold 2"]
        },
        {
          title: "One hold can be spent to ask the Keeper one of the following questions:",
          list: [
            "What happened here?",
            "What sort of creature is it?",
            "What can it do?",
            "What can hurt it?",
            "Where did it go?",
            "What was it going to do?",
            "What is being concealed here?"
          ]
        }
      ]
    }
  },
  {
    id: "hm-5",
    title: "Basic Moves: Manipulate Someone",
    content: {
      header: "Once you have given them a reason, tell them what you want them to do and roll +Charm.",
      list: [
        {
          title: "FOR A NORMAL PERSON",
          list: [""]
        },
        {
          title: "On a 10+",
          list: ["They'll do it for the reason you gave them. If you asked too much, they'll tell you the minumun it would take for them to do it (or if there's no way they'd do it)."]
        },
        {
          title: "On a 7-9",
          list: ["They'll do it, but only if you do something for them right now to show that you mean it. If you asked too much, they'll tell you what, if anything, it would take for them to do it."]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["Not only do they do what you want right now, they also become your ally for the rest of the mystery (or, if you do enough for them, permanently)."]
        },
        {
          title: "FOR ANOTHER HUNTER",
          list: [""]
        },
        {
          title: "On a 10+",
          list: ["If they do what you ask, they mark experience and get +1 forward."]
        },
        {
          title: "On a 7-9",
          list: ["They mark experience if they do what you ask."]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["They must ACT UNDER PRESSURE to resist your request. If they do what you ask, they mark one experience and take +1 ongoing while doing what you asked."]
        }
      ]
    }
  },
  {
    id: "hm-6",
    title: "Basic Moves: Protect Someone",
    content: {
      header: "When you prevent harm to another character, roll +Tough.",
      list: [
        {
          title: "On a 7+",
          list: ["You protect them okay, but you'll suffer some or all of the harm they were going to get."]
        },
        {
          title: "On a 10+",
          list: [
            "CHOOSE AN EXTRA:",
            "You suffer little harm (-1 harm).",
            "All impending danger is now focused on you.",
            "You inflict harm on the enemy.",
            "You hold the enemy back.",
          ]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["Both you and the character you are protecting are unharmed and out of danger. If you were protecting a bystander, they also become your ally."]
        }
      ]
    }
  },
  {
    id: "hm-7",
    title: "Basic Moves: Read a Bad Situation",
    content: {
      header: "When you look around and read a bad situation, roll +Sharp.",
      list: [
        {
          title: "On a 10+",
          list: ["Hold 3"]
        },
        {
          title: "On a 7-9",
          list: ["Hold 1"]
        },
        {
          title: "One hold can be spent to ask the Keeper one of the following questions:",
          list: [
            "What's my best way in?",
            "What's my best way out?",
            "Are there any dangers we haven't noticed?",
            "What's the biggest threat?",
            "What's most vulnerable to me?",
            "What's the best way to protect the victims?",
            "If you act on the answers, you get +1 ongoing while the information is relevant."
          ]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["You may ask the Keeper any question you want about the situation, not just the listed ones."]
        }
      ]
    }
  },
  {
    id: "hm-8",
    title: "Basic Moves: Use Magic",
    content: {
      header: "When you use magic, say what you're trying to acheive and how you do the spell, then roll +Weird.",
      list: [
        {
          title: "On a 10+",
          list: ["The magic works without issues: choose your effect."]
        },
        {
          title: "On a 7-9",
          list: ["It works imperfectly: choose your effect and a glitch. The Keeper will decide what effect the glitch has."]
        },
        {
          title: "ADVANCED: On a 12+",
          list: ["The Keeper will offer you some added benefit."]
        },
        {
          title: "EFFECTS",
          list: [
            "Inflict harm (1-harm ignore-armour magic obvious).",
            "Enchant a weapon. It gets +1 harm and +magic.",
            "Do one thing that is beyond human limitations.",
            "Bar a place or portal to a specific person or a type of creature.",
            "Trap a specific person, minion or monster.",
            "Banish a spirit or curse from the person, object or place it inhabits.",
            "Summon a monster into the world.",
            "Communicate with something that you do not share a language with,",
            "Observe another place or time.",
            "Heal 1-harm from an injury, cure a disease or neutralize a poison."
          ]
        },
        {
          title: "GLITCHES",
          list: [
            "The effect is weakened.",
            "The effect is of short duration.",
            "You take 1-harm ignore-armour.",
            "The magic draws immediate, unwelcome attention.",
            "It has a problematic side effect."
          ]
        },
        {
          title: "THE KEEPER MAY SAY THAT...",
          list: [
            "The spell requires weird materials.",
            "The spell will take 10 seconds, 30 seconds or 1 minute to cast.",
            "The spell requires ritual chanting and gestures.",
            "The spell requires you to draw arcane symbols.",
            "You need one or two people to help cast the spell.",
            "You need to refer to a tome of magic for the details."
          ]
        }
      ]
    }
  },
  {
    id: "hm-9",
    title: "Basic Moves: Big Magic",
    content: {
      header: "Use this when you want more than the Use Magic effects. Tell the Keeper what you want to do.",
      list: [
        {
          title: "The Keeper may require:",
          list: [
            "You need to spend a lot of time (days or weeks) researching the magic ritual.",
            "You need to experiment with the spell -- there will be lots of failures before you get it right.",
            "You need some rare and weird ingredients and supplies.",
            "The spell will take a long time (hours or days) to cast.",
            "You need a lot of people (2, 3, 7, 13, or more) to help.",
            "The spell needs to be cast at a particular and/or time.",
            "You need to use magic as part of the ritual, perhaps to summon a monster, communicate with something, or bar the portal you opened.",
            "It will have a specific side-effect or danger."
          ]
        },
        {
          title: "If you meet the requirements, then the magic takes effect.",
          list: [""]
        }
      ]
    }
  },
  {
    id: "hm-10",
    title: "Harm",
    content: {
      header: "Whenever you suffer harm, the Keeper will tell you what effect it has.",
      list: [
        {
          title: "Injury severity depends on how much harm you have suffered:",
          list: [
            "0-harm wounds have only minor, short-term effects.",
            "4-7 harm wounds are serious and unstable. They will get worse unless treated. Mark the \" unstable\" box.",
            "8-harm or more will kill a normal human, including a hunter.",
            "Armour reduces the harm suffered by the number of points it is rated for.",
            "Monsters may not be defeated until you use their weakness against them, and this applies to some minions as well."
          ]
        },
        {
          title: "Recovery",
          list: [
            "0 harm wounds are considered healed right away.",
            "1-3 harm wounds improve when you receive first aid, and later when you rest. Heal 1 when you do.",
            "Unstable wounds require first aid to become stable. While unstable, they may get worse.",
            "4+ harm wounds require a healing move, time in an infirmary or hospital or magical healing."
          ]
        },
        {
          title: "At the end of the mystery, you also have a chance to heal.",
          list: [
            "If there is no chance to rest, heal 1 harm.",
            "If there is plenty of time, heal all harm."
          ]
        }
      ]
    }
  },
  {
    id: "hm-11",
    title: "Luck",
    content: {
      header: "",
      list: [
        {
          title: "When you spend a point of Luck, pick one:",
          list: [
            "Decrease a wound you have suffered to 0 harm.",
            "After you roll, retroactively change the result to a 12.",
          ]
        },
        {
          title: "When you have no luck left, bad things will happen to you.",
          list: [""]
        }
      ]
    }
  },
  {
    id: "hm-12",
    title: "Leveling Up",
    content: [
      "Mark an experience point whenever your roll totals six or less, or when a move tells you to.",
      "Whenever you mark the fifth experience box, level up. Erase all 5 marks and choose an improvement from your list.",
      "After you have leveled up 5 times, you may choose from the advanced improvement list as well."
    ]
  },
  {
    id: "hm-13",
    title: "End of Session",
    content: {
      header: "",
      list: [
        {
          title: "At the end of the session, the Keeper will ask the following questions:",
          list: [
            "Did we conclude the current mystery?",
            "Did we save someone from certain death (or worse)?",
            "Did we learn something new about the world?",
            "Did we learn something new and important about one of the hunters?"
          ]
        },
        {
          title: "1 or 2 Yes answers",
          list: ["Mark one experience."]
        },
        {
          title: "3 or 4 Yes Answers",
          list: ["Mark two experience."]
        }
      ]
    }
  }
]
