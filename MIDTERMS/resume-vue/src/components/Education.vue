<!-- Code for the Profile component -->

<template>
    <div id="my-education">
        <div class="card" style="width: 18rem;">
            <h1>Elementary</h1>
            <div class="card-body">
                <p class="card-text">{{ elementary }}</p>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <h1>Highschool</h1>
            <div class="card-body">
                <p class="card-text">{{ highschool }}</p>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <h1>College</h1>
            <div class="card-body">
                <p class="card-text">{{ college }}</p>
            </div>
        </div>
    </div>
</template>

<!-- Script of the Profile component -->

<script>
export default {
    name:'Education',
    data() {
        return {
        elementary: 'Saint Francis Learning Center',
        highschool: 'Holy Angel University',
        college: 'Holy Angel University'
        }
    }
}
</script>

<style>
h1 {
    font-size: 20px;
}
p {
    font-size: 20px;
}

.card {
    padding: 15px;

}
</style>