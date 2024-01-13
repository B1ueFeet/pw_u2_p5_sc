<template>
    <div class="container">
        <ul>
            <li v-for="n in 4" :key="n" :id="'button' + n">
                Botón {{ n }}
            </li>
        </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
    list-style-type: none;
}

li {
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}

li:hover {
    background: rgba(0, 0, 0, 0.1);
}

.container {
    display: flex;
    justify-content: center;

}
</style>