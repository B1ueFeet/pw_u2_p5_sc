<template>
    <div class="poke_container">
        <img v-if="show" :src="imageGenerator" alt="No se puede Visualizar">
        <img v-if="!show" class="hide" :src="imageGenerator" alt="No se puede Visualizar">

    </div>
</template>

<script>
export default {
    props: {
        pokeId: {
            type: Number,
            required: true,
        },
        show: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    computed: {
        imageGenerator() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`

        }
    }

}
</script>

<style>
.hide {
    filter: brightness(0);
}

img {
    height: 200px;
    position: absolute;
    right: 42%;
}

.poke_container {
    height: 200px;
}
</style>