<template>
    <body>
        <div class="breadcrumbs">
            <span><NuxtLink>Cambridge English </NuxtLink></span>
            <span><font-awesome-icon icon="fa-solid fa-angle-right" /> </span>
            <span><NuxtLink> Test your English </NuxtLink></span>
            <span><font-awesome-icon icon="fa-solid fa-angle-right" /> </span>
            <span><NuxtLink style="text-decoration: none; color: inherit;" to="/test-your-english/general-english"> General English </NuxtLink></span>
            <span><font-awesome-icon icon="fa-solid fa-angle-right" /> </span>
            <span><NuxtLink> Test your English - Your results </NuxtLink></span>
        </div>
        <div class="sub-header">
            <h1>Test your English - Your results</h1>
        </div>
        <div class="content-container">
            <h2>Well done for completing the test!</h2>
            <h2>Your score is <i>{{ score }}</i> out of 25 -</h2>
            <h3>Your score means you might be ready to prepare for one of our qualifications called</h3>
            <h3>A2 Key</h3>
            <button @click="toggleResults">
                {{ buttonLabel }}
            </button>
            <transition name="slide-up" mode="out-in">
                <div v-if="areResults" class="results-container">
                    <div class="results" v-for="a, index in data" :key="a.id">
                        <AnswersReview :answersData="a" :index="index" />
                    </div>
                </div>
            </transition>
            
        </div>
    </body>
</template>

<script setup>
    import axios from 'axios';

    const areResults = ref(false);
    const buttonLabel = ref('Review your answers')
    const { data } = useAsyncData('testData', async () => {
        const response = await axios.get('http://localhost:3333/test-your-english/general-english')
        return response.data
    });
    const score = localStorage.getItem('score');
    const toggleResults = () => {
        areResults.value = !areResults.value;
        if (areResults.value === true) {
            return buttonLabel.value = 'Hide your answers'
        }
        buttonLabel.value = 'Review your answers'
    };
    // const qualification = computed(() => {
    //     if (score === 5) {

    //     }
    // })
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

    .sub-header {
        width: 70vw;
        padding: 0.75em 1.75em;
        border: none;
        border-bottom: 0.5em solid;
        border-color: #e1523d;
    }

    .content-container {
        padding: 0.5em 0;
        width: 70vw;
        background-color: white;
        text-align: center;
    }

    .content-container h2 {
        padding: 0.5em 0;
    }

    button {
        margin: 2em;
        padding: 0.33em 0.75em;
        border: none;
        border-radius: .15388em;
        font-size: 1em;
        font-weight: 600;
        color: #fff;
        background-color: #333;
        cursor: pointer;
    }

    .slide-up-enter-active, .slide-up-leave-active {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .slide-up-enter-from, .slide-up-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }

    .results {
        padding-top: 2em;
    }


</style>