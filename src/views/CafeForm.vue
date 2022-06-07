<template>
    <div>
        <v-form>
            <v-text-field required="true"></v-text-field>
        </v-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:{
                    name: null,
                    details: null,
                    img: null,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>