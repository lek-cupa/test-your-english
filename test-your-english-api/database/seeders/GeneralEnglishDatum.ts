import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TestQuestion from 'App/Models/TestQuestion'

export default class GeneralEnglishDatumSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await TestQuestion.createMany([
      {
          id: "2db28192-4874-11ee-be56-0242ac120002",
          question: "What colour will you paint the children's bedroom?",
          choices: JSON.stringify([
              "I hope it was right.",
              "We can't decide.",
              "It wasn't very difficult."
          ]),
          answer: "We can't decide."
      },
      {
          id: "2db2843a-4874-11ee-be56-0242ac120002",
          question: "I can't understand this email.",
          choices: JSON.stringify([
              "Would you like some help?",
              "Don't you know?",
              "I suppose you can." 
          ]),
          answer: "Would you like some help?"
      },
      {
          id: "2db2857a-4874-11ee-be56-0242ac120002",
          question: "I'd like two tickets for tomorrow night.",
          choices: JSON.stringify([
              "How much did you pay?",
              "Afternoon and evening.",
              "I'll just check for you." 
          ]),
          answer: "I'll just check for you."
      },
      {
          id: "2db2869c-4874-11ee-be56-0242ac120002",
          question: "Shall we go to the gym now?",
          choices: JSON.stringify([
              "I'm too tired.",
              "It's very good.",
              "Not at all." 
          ]),
          answer: "I'm too tired."
      },
      {
          id: "2db287be-4874-11ee-be56-0242ac120002",
          question: "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
          choices: JSON.stringify([
              "such",
              "too",
              "so",
              "very"
          ]),
          answer: "so"
      },
      {
          id: "2db28958-4874-11ee-be56-0242ac120002",
          question: "The company needs to decide ...... and for all what its position is on this point.",
          choices: JSON.stringify([
              "here",
              "once",
              "first",
              "finally"
          ]),
          answer: "once"
      },
      {
          id: "2db28b7e-4874-11ee-be56-0242ac120002",
          question: "Don't put your cup on the ...... of the table - someone will knock it off.",
          choices: JSON.stringify([
              "outside",
              "edge",
              "boundary",
              "border"
          ]),
          answer: "edge"
      },
      {
          id: "2db28d72-4874-11ee-be56-0242ac120002",
          question: "I'm sorry - I didn't ...... to disturb you.",
          choices: JSON.stringify([
              "hope",
              "think",
              "mean",
              "suppose"
          ]),
          answer: "mean"
      },
      {
          id: "2db28f70-4874-11ee-be56-0242ac120002",
          question: "The singer ended the concert ...... her most popular song.",
          choices: JSON.stringify([
              "by",
              "with",
              "in",
              "as"
          ]),
          answer: "with"
      },
      {
          id: "2db29178-4874-11ee-be56-0242ac120002",
          question: "Would you mind ...... these plates a wipe before putting them in the cupboard?",
          choices: JSON.stringify([
              "making",
              "doing",
              "getting",
              "giving"
          ]),
          answer: "giving"
      },
      {
          id: "2db292a4-4874-11ee-be56-0242ac120002",
          question: "I was looking forward ...... at the new restaurant, but it was closed.",
          choices: JSON.stringify([
              "to eat",
              "to have eaten",
              "to eating",
              "eating"
          ]),
          answer: "to eating"
      },
      {
          id: "2db294ac-4874-11ee-be56-0242ac120002",
          question: "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
          choices: JSON.stringify([
              "Whatever",
              "No matter how",
              "However much",
              "Although"
          ]),
          answer: "No matter how"
      },
      {
          id: "2db295e2-4874-11ee-be56-0242ac120002",
          question: "It was only ten days ago ...... she started her new job.",
          choices: JSON.stringify([
              "then",
              "since",
              "after",
              "that"
          ]),
          answer: "that"
      },
      {
          id: "2db29812-4874-11ee-be56-0242ac120002",
          question: "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
          choices: JSON.stringify([
              "booked",
              "ordered",
              "commanded",
              "asked"
          ]),
          answer: "ordered"
      },
      {
          id: "2db29948-4874-11ee-be56-0242ac120002",
          question: "Have you got time to discuss your work now or are you ...... to leave?",
          choices: JSON.stringify([
              "thinking",
              "round",
              "planned",
              "about"
          ]),
          answer: "about"
      },
      {
          id: "2db29a60-4874-11ee-be56-0242ac120002",
          question: "She came to live here ...... a month ago.",
          choices: JSON.stringify([
              "quite",
              "beyond",
              "already",
              "almost"
          ]),
          answer: "almost"
      },
      {
          id: "2db29bfa-4874-11ee-be56-0242ac120002",
          question: "Once the plane is in the air, you can ...... your seat belts if you wish.",
          choices: JSON.stringify([
              "undress",
              "unfasten",
              "unlock",
              "untie"
          ]),
          answer: "unfasten"
      },
      {
          id: "2db29da8-4874-11ee-be56-0242ac120002",
          question: "I left my last job because I had no ...... to travel.",
          choices: JSON.stringify([
              "place",
              "position",
              "opportunity",
              "possibility"
          ]),
          answer: "opportunity"
      },
      {
          id: "2db29ec0-4874-11ee-be56-0242ac120002",
          question: "It wasn't a bad crash and ...... damage was done to my car.",
          choices: JSON.stringify([
              "little",
              "small",
              "light",
              "mere"
          ]),
          answer: "little"
      },
      {
          id: "2db29fd8-4874-11ee-be56-0242ac120002",
          question: "I'd rather you ...... to her why we can't go.",
          choices: JSON.stringify([
              "would explain",
              "explained",
              "to explain",
              "will explain"
          ]),
          answer: "explained"
      },
      {
          id: "2db2a1a4-4874-11ee-be56-0242ac120002",
          question: "Before making a decision, the leader considered all ...... of the argument.",
          choices: JSON.stringify([
              "sides",
              "features",
              "perspectives",
              "shades"
          ]),
          answer: "sides"
      },
      {
          id: "2db2a384-4874-11ee-be56-0242ac120002",
          question: "This new printer is recommended as being ...... reliable.",
          choices: JSON.stringify([
              "greatly",
              "highly",
              "strongly",
              "readily"
          ]),
          answer: "highly"
      },
      {
          id: "2db2a53c-4874-11ee-be56-0242ac120002",
          question: "When I realised I had dropped my gloves, I decided to ...... my steps.",
          choices: JSON.stringify([
              "retrace",
              "regress",
              "resume",
              "return"
          ]),
          answer: "retrace"
      },
      {
          id: "2db2a654-4874-11ee-be56-0242ac120002",
          question: "Anne's house is somewhere in the ...... of the railway station.",
          choices: JSON.stringify([
              "region",
              "quarter",
              "vicinity",
              "district"
          ]),
          answer: "vicinity"
      }
    ])
  }
}
