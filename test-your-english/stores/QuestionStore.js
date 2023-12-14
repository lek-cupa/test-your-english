import { defineStore } from "pinia";
import axios from 'axios';

export const useQuestionStore = defineStore('questionStore', {
    state: () => ({
        allQuestions: [],
        selectedQuestions: [],
        startIndex: 0,
        endIndex: 5,
        pageNumber: 1,
    }),
    actions: {
        async loadQuestions() {
            if (this.pageNumber === 1) {
                try {
                    const { data } = await axios.get('http://localhost:3333/test-your-english/general-english');
                    this.allQuestions = data;
                } catch (error) {
                    console.error(error);
                }
            }
            
            this.startIndex = (this.pageNumber - 1) * 5;
            this.endIndex = this.startIndex + 5;
            this.selectedQuestions = this.allQuestions.slice(this.startIndex, this.endIndex)
        }
    }
})