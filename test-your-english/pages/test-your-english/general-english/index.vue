<template>
    <body>
        <div class="breadcrumbs">
            <span><NuxtLink>Cambridge English </NuxtLink></span>
            <span><font-awesome-icon icon="fa-solid fa-angle-right" /> </span>
            <span><NuxtLink> Test your English </NuxtLink></span>
            <span><font-awesome-icon icon="fa-solid fa-angle-right" /> </span>
            <span><NuxtLink style="text-decoration: none; color: inherit;" to="/test-your-english/general-english"> General English </NuxtLink></span>
        </div>
        <div class="sub-header">
            <div class="category-title">
                <h1>General English</h1>
            </div>
            <div class="rubric">
                <h2>Test Your English</h2>
                <p>For the questions below, please choose the best option to complete the sentence or conversation.
                </p>
            </div>
            <div class="progress">
                <p>Page <strong>{{ questionStore.pageNumber }}</strong> of 5</p>
                <div class="progress-bar">
                    <div class="remain-progress">
                        <div class="curr-progress" :style="{ width: percentageProgress + '%' }">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form @submit.prevent="nextPage" method="post">
            <div>
                <div class="content-box" v-for="q, index in questionStore.selectedQuestions" :key="q.id">
                    <QuestionFieldset :testData="q" :index="index" />
                </div>

                <div class="pagination">
                    <input v-if="questionStore.pageNumber < 5" type="submit" value="Next">
                    <input v-else type="submit" value="Get Results">
                    <span>You must answer all questions before proceeding.</span>
                </div>
            </div>
        </form>
    </body>
</template>

<script setup>
    import { useQuestionStore } from '../../../stores/QuestionStore';
    import { useAnswerStore } from '../../../stores/AnswerStore';

    const questionStore = useQuestionStore();
    const answerStore = useAnswerStore();
    const percentageProgress = ref(20);

    onMounted(() => {
        questionStore.loadQuestions();
    });

    const nextPage = () => {
        if (questionStore.pageNumber === 5) {
            answerStore.setScore();
            answerStore.setUserAnswers();
            window.location = 'http://localhost:3001/test-your-english/general-english/results/';
            return;
        }
        questionStore.pageNumber += 1;
        percentageProgress.value += 20;
        questionStore.loadQuestions();

        window.scrollTo({
            top: 300,
            left: 0,
            behavior: "smooth",
        });
    }
</script>

<style scoped>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .breadcrumbs {
        width: 100%;
        padding: 0.5em 15vw;
        background-color: white;
    }

    span:hover {
        text-decoration: underline;
    }

    .category-title {
        width: 70vw;
        padding: 0.75em 1.75em;
        border: none;
        border-bottom: 0.5em solid;
        border-color: #004c76;
    }

    .rubric, .progress {
        padding: 0.75em 1.75em;
    }

    .rubric h2, .rubric p {
        padding: 1em 0;
    }

    .rubric, .content-box, .progress, .pagination {
        width: 70vw;
        background-color: white;
    }

    .progress {
        width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progress p {
        width: max-content;
    }

    .progress-bar {
        width: 70vw;
    }

    .curr-progress, .remain-progress {
        display: inline-block;
    }

    .curr-progress {
        position: absolute;
        height: 8px;
        background-color: #0091ea;
    }

    .remain-progress {
        position: relative;
        height: 8px;
        width: 100%;
        background-color: #f2f1f0;
    }

    .content-box {
        padding-top: 2em;
    }

    .pagination {
        padding: 1.75em;
    }

    .pagination input {
        padding: 8px 24px;
        margin: 24px 0 40px 0;
        color: white;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 1em;
        border-radius: 0.25em;
        border: none;
        background: #0091ea;
        cursor: pointer;
    }

    .pagination span {
        padding: 0 2em;
        font-weight: bold;
    }

</style>