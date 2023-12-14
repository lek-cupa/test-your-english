<template>
    <fieldset>
        <legend>
            <span class="questionNumber">{{ index + 1 }}</span>
            <span>{{ testData.question }}</span>
        </legend>
        <div class="choices-container">
            <div class="choices" v-for="(choice, index) in testData.choices" :key="index">
                <label :for="`option-${testData.id}-${index}`">
                    <input
                    type="radio"
                    :id="`option-${testData.id}-${index}`"
                    :name="`option-${testData.id}`"
                    :value="choice"
                    v-model="userSelect"
                    required
                    >
                    {{ choice }}
                </label>
            </div>
        </div>
    </fieldset>
</template>

<script setup>
    import { useAnswerStore } from "../stores/AnswerStore";
    const { testData, index } = defineProps(['testData', 'index']);

    const answerStore = useAnswerStore();

    const userSelect = computed({
        get() {
            return answerStore.selected.id;
        },
        set(value) {
            answerStore.selected.id = testData.id;
            answerStore.selected.question = testData.question;
            answerStore.selected.choice = value;
            
            if (answerStore.selectedOptions.findIndex((a) => a.id === answerStore.selected.id) === -1) {
                answerStore.selectedOptions.push(answerStore.selected);
            } else {
                answerStore.selectedOptions.splice(answerStore.selectedOptions.findIndex((a) => a.id === answerStore.selected.id), 1);
                answerStore.selectedOptions.push(answerStore.selected);
            }
            answerStore.selected = { id: null, question: null, choice: null };
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

legend {
    padding: 1em;
}

.questionNumber {
    display: block;
    float: left;
    color: white;
    text-align: center;
    background: #212121;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    padding: 0;
    margin: -0.25em .5em 0 0;
    line-height: 2em;
    font-family: inherit !important;
    font-weight: bold;
}

.choices-container {
    display: block;
    padding-bottom: 2em;
}

legend, label {
    font-size: large;
}

label {
    display: block;
    width: 33vw;
    padding: 1em;
    background-color: #fafafa;
    border: 1px;
    border-color: #9e9e9e;
    border-radius: 8px;
    border-style: solid;
    cursor: pointer;
}

label:hover {
    color: #0091ea;
    border-color: #0091ea;
}

.choices {
    margin: 0 1em 1.20em 1em;
    
}
</style>