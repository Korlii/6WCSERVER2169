<!-- Code for the Profile component -->

<template>
    <div id="my-profile">
        <div class="container">
            <h1>{{ objective }}</h1>
            <h1>{{ name }}</h1>
            <h1>{{ course }}</h1>
            <h1>{{ specialization }}</h1>
            <h1>{{ email }}</h1>
            <h1>{{ address }}</h1>
        </div>
    </div>
</template>

<!-- Script of the Profile component -->

<script>
export default {
    name:'Profile',
    data() {
        return {
        objective: 'Objective: ',
        name: 'Name: Adrian D. Curley',
        course: 'Course: Information Technology',
        specialization: 'Specialization: Web Development',
        email: 'Email: adriancurley9@gmail.com',
        address: 'Address: Porac, Pampanga'
        }
    }
}
</script>

<style>
.container h1 {
    font-size: 25px;
}
</style>