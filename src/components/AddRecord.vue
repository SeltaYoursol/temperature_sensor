<script>
import { mapMutations } from 'vuex';
import BasicForm from './BasicForm.vue';
export default {
  data() {
    return {
      temperature: '',
      success: false,
    };
  },
  computed: {
    recordsList() {
      return this.$store.state.recordsList;
    },
  },
  methods: {
    ...mapMutations(['createRecord']),
    //generating unique id for each record
    generateId(id = 0) {
      if (!this.recordsList.find((item) => item.id === id)) {
        return id;
      } else {
        let rd = Math.round(Math.random() * (this.recordsList.length + 1));
        return this.generateId(rd);
      }
    },
    saveRecord(value) {
      this.createRecord({
        id: this.generateId(),
        temperature: value,
      });
      this.showMessage();
    },

    showMessage() {
      this.success = true;
      setTimeout(() => (this.success = false), 2000);
    },
  },
  components: { BasicForm },
};
</script>

<template>
  <div>
    <h1 class="h1">Добавить запись</h1>
    <BasicForm
      :saveHandler="saveRecord"
      :value="temperature"
      title="Температура"
      id="temperature"
    />

    <div v-if="success" class="message">Запись успешно создана!</div>
  </div>
</template>
<style scoped>
.message {
  width: 400px;
  text-align: center;
  padding: 9px 10px;
  border-radius: 5px;
  border: 1px solid green;
  background: #90ee9075;
  color: darkgreen;
  position: fixed;
  top: 28%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
