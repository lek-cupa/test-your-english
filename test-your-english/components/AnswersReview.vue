<template>
    <fieldset>
        <legend>
            <span class="questionNumber" :style="{ backgroundColor: mark }">{{ index + 1 }}</span>
            <span :style="{ color: mark }">{{ answersData.question }}</span>
        </legend>
        <div class="result-container">
            <div class="user-answer">
                <label v-if="isCorrect" class="correct">Correct (your answer)</label>
                <label v-else class="incorrect">Incorrect (your answer)</label>
                <div class="answers" :class="{ correct: isCorrect }">
                    <p>{{ userAnswer }}</p>
                </div>
            </div>

            <div class="correct-answer" v-if="!isCorrect">
                <label class="correct">Correct</label>
                <div class="answers correct">
                    <p>{{ answersData.answer }}</p>
                </div>
            </div>
        </div>
    </fieldset>
</template>

<script setup>
    const { answersData, index } = defineProps(['answersData', 'index']);
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers'))
    const userAnswer = userAnswers.find((a) => a.id === answersData.id).choice
    const isCorrect = userAnswer === answersData.answer ? true : false;
    const mark = computed(() => {
        if (isCorrect === true) {
            return '#009688'
        }
    })
    
</script>

<style scoped>
    fieldset {
        display: block;
        margin-left: 2px;
        margin-right: 2px;
        padding-top: 0.35em;
        padding-bottom: 0.625em;
        padding-left: 0.75em;
        padding-right: 0.75em;
        border: none;
        border-bottom: 1px dashed;
        border-color: silver;
    }

    .result-container {
        display: block;
        padding-bottom: 2em;
    }

    legend {
        padding: 1em;
        color: #e53935;
    }

    .question-number {
        padding: 0.25em 0.67em;
        margin: -0.25em .5em 0 0;
        height: 2em;
        width: 2em;
        color: white;
        font-weight: bold;
        background: #e53935;
        border-radius: 50%;
    }

    legend, .answers {
        font-size: large;
    }

    .questionNumber {
        display: block;
        float: left;
        color: white;
        text-align: center;
        background: #e53935;
        border-radius: 50%;
        height: 2em;
        width: 2em;
        padding: 0;
        margin: -0.25em .5em 0 0;
        line-height: 2em;
        font-family: inherit !important;
        font-weight: bold;
    }

    label {
        font-weight: bold;
    }

    .user-answer, .correct-answer {
        margin: 0 1em 1.20em 1em;
        text-align: left;
    }

    .answers {
        display: block;
        width: 33vw;
        padding: 1em;
        margin-top: 0.25em;
        background-color: #fafafa;
        border: 1px;
        border-color: #e53935;
        border-radius: 8px;
        border-style: solid;
        color: #e53935;
    }

    .correct {
        background-color: #ffffff;
        border-color: #009688;
        color: #009688;
        font-weight: bold;
    }

    .incorrect {
        color: #e53935;
    }
</style>