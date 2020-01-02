<template>
    <div>
        <a-button type="danger" v-test @click="add">提交</a-button>
        <input type="text" placeholder="请填写姓..." v-model="lastName">
        <input type="text" placeholder="请填写名..." v-model="firstName">
        <input v-model="genterName">
        <br>
        <div>
            组件： {{modelTest}}
        </div>
        <input :value="modelTest" @change="$emit('testModel',$event.target.value)">
    </div>
</template>

<script lang="ts">
    import $ from "jquery";
    import {Vue, Component, PropSync, Prop, Watch, Model} from "vue-property-decorator";

    @Component({
        directives: {
            test: {
                bind: function (el) {
                    let text = $(el).text();
                    console.log(text);
                }
            }
        },
        filters: {
            test(val: string) {
                return val + ",哈哈哈哈哈";
            }
        }
    })
    export default class test extends Vue {
        lastName: string = "";
        firstName: string = "";
        name: string = "";

        get genterName() {
            this.name = this.lastName + this.firstName;
            return this.name;
        }

        @Prop({type: Number, default: -1}) count!: Number;

        add() {
            this.$emit("test", this.count);
        }

        @Watch('name')
        changeName(newVal: string, oldVal: string) {
            if (newVal !== oldVal) {
                alert(newVal);
            }
        }

        @Model("testModel", {type: String, default: "哈哈哈"}) modelTest!: string;
    }
</script>

<style scoped>

</style>