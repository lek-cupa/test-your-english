<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">
                    <img src="../assets/images/cambridge-logo.png" alt="Cambridge Logo">
                </NuxtLink>

                <ul>
                    <li><NuxtLink><h4>Products and Services</h4></NuxtLink></li>
                    <li><NuxtLink><h4>About Us</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Careers</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Change Language</h4></NuxtLink></li>
                </ul>
            </nav>

            <div class="search-container" role="banner">
                <img src="../assets/images/english-language-assessment.svg" alt="English Language Assessment">
            </div>

            <div class="navigation-list" role="banner">
                <ul>
                    <li><NuxtLink><h4>Home</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Why Choose Us?</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Exams and Tests</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Learning English</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Teaching English</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Blogs</h4></NuxtLink></li>
                    <li><NuxtLink><h4>News</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Events</h4></NuxtLink></li>
                    <li><NuxtLink><h4>Help</h4></NuxtLink></li>
                </ul>
            </div>
        </header>

        <NuxtPage />

        <div class="pre-footer">
            <div class="pre-footer-container1">
                <h3>On this site</h3>
                <ul class="pre-footer-list">
                    <li><NuxtLink>Home</NuxtLink></li>
                    <li><NuxtLink>Why Cambridge English?</NuxtLink></li>
                    <li><NuxtLink>Exams and Tests</NuxtLink></li>
                    <li><NuxtLink>Learning English</NuxtLink></li>
                    <li><NuxtLink>Teaching English</NuxtLink></li>
                    <li><NuxtLink>News</NuxtLink></li>
                    <li><NuxtLink>Events</NuxtLink></li>
                    <li><NuxtLink>Help</NuxtLink></li>
                </ul>
            </div>

            <div class="pre-footer-container2">
                <div class="pre-footer-container2-item">
                    <NuxtLink>
                        <img src="../assets/images/alte-logo-footer.png" alt="Alte Logo">
                    </NuxtLink>
                </div>
                
                <div class="pre-footer-container2-item">
                    <NuxtLink>
                        <img src="../assets/images/english-profile-logo-footer.png" alt="English Profile Logo">
                    </NuxtLink>
                </div>
            </div>

            <div class="pre-footer-container3">
                <div class="pre-footer-container3-item">
                    <NuxtLink>
                        <img src="../assets/images/Cambridge_Press_Assessment_Landscape_Logo_RGB-280x55.png" alt="Alte Logo">
                    </NuxtLink>
                </div>
                
                <div class="pre-footer-container3-item">
                    <NuxtLink>
                        <img src="../assets/images/bsi-logo-footer.png" alt="English Profile Logo">
                    </NuxtLink>
                </div>
            </div>
        </div>

        <footer>
            
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    header {
        align-items: center;
    }

    nav {
        height: 60px;
        display: flex;
        margin: 0 auto;
        padding: 0 10vw;
        justify-content: space-between;
        background-color: white;
    }

    nav a {
        height: 40px;
    }

    a img {
        width: 180px;
        height: auto;
        object-fit: contain;
        margin: 0.75rem;
    }

    nav ul, .navigation-list ul {
        list-style: none;
        text-decoration: none;
        display: flex;
    }

    nav ul li {
        width: max-content;
        margin: 1rem 1rem;
    }
    .search-container {
        display: flex;
        background-color: #00bdb6;
    }

    .search-container img {
        padding: 1.5rem 11vw;
    }

    .navigation-list {
        background-color: #00bdb6;
        padding: 0.5rem 11vw;
    }

    .navigation-list ul {
        justify-content: space-between;
        padding: 0.5rem 0.5rem;
        color: #133844;
    }

    .pre-footer {
        display: flex;
        justify-content: space-between;
        padding: 5em 11vw;
        background-color: white;
    }

    .pre-footer-container1 ul {
        list-style: none;
        text-decoration: none;
    }

    .pre-footer-list li {
        margin: 0.5rem 0;
    }

    .pre-footer-container2 {
        display: block;
        border-left: black;
        border-style: none solid none solid;
        border-width: 1px;
        padding: 0 6rem;
    }

    .pre-footer-container3 {
        padding-right: 6rem;
    }

    .pre-footer-container2-item, .pre-footer-container3-item {
        padding-bottom: 2rem;
    }
</style>