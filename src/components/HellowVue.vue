<template>
    <div>
        <a-button type="danger" v-test>提交</a-button>
    </div>
</template>

<script lang="ts">
    import $ from "jquery";
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        directives: {
            test: {
                bind: function (el) {
                    let text = $(el).text();
                    console.log(text);
                }
            }
        },
        filters:{

        }
    })
    export default class test extends Vue {
        name: string = "HellowVue";
    }
</script>

<style scoped>

</style>