import { defineStore } from "pinia";
import { useQuestionStore } from "./QuestionStore";

export const useAnswerStore = defineStore('answerStore', {
    state: () => ({
        selected: { id: null, question: null, choice: null },
        selectedOptions: [],
        score: 0
    }),
    getters: {
        correctAnswers() {
            return (useQuestionStore().allQuestions.map((q) => {
                return { id: q.id, question: q.question, answer: q.answer };
            }));
        }
    },
    actions: {
        setUserAnswers() {
            localStorage.setItem('userAnswers', JSON.stringify(this.selectedOptions))
        },
        setScore() {
            this.correctAnswers.forEach((a) => {
                for (let i = 0; i < 25; i++) {
                    if (a.id === this.selectedOptions[i].id && a.answer === this.selectedOptions[i].choice) {
                        this.score += 1;
                    }
                }
            })
            localStorage.setItem('score', this.score)
        }
    }
})