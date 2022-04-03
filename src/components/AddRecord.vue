<script>
import { mapMutations } from 'vuex';
import BasicForm from './BasicForm.vue';
export default {
  data() {
    return {
      temperature: '',
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
  </div>
</template>
<style scoped></style>
