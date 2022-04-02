<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      temperature: 0,
      list: [1, 2, 4],
    };
  },
  computed: {
    recordsList() {
      return this.$store.state.recordsList;
    },
  },
  methods: {
    ...mapMutations(['createRecord']),

    //genereting unique id for each record
    generateId(id = 0) {
      if (!this.recordsList.find((item) => item.id === id)) {
        return id;
      } else {
        let rd = Math.round(Math.random() * (this.recordsList.length + 1));
        return this.generateId(rd);
      }
    },

    saveRecord() {
      this.createRecord({
        id: this.generateId(),
        temperature: this.temperature,
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>страница добавления/удаления показаний</h1>
    <form action="" class="form">
      <div class="form-item">
        <input
          class="form-item__input"
          type="text"
          id="temperature"
          v-model="temperature"
        />
        <label class="form-item__label" for="temperature">Температура</label>
      </div>
      <button @click.prevent="saveRecords">Сохранить</button>
    </form>
  </div>
</template>
<style scoped>
.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
}
</style>
>
