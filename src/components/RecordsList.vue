<script>
import { mapMutations } from 'vuex';
import BasicForm from './BasicForm.vue';
export default {
  components: { BasicForm },
  data() {
    return {
      temperature: '',
      editRecordActive: false,
      currentID: '',
    };
  },
  computed: {
    recordsList() {
      return this.$store.state.recordsList;
    },
    filteredRecordsList() {
      return this.$store.getters.filteredRecordsList;
    },
  },
  methods: {
    ...mapMutations(['editCurrentRecord', 'deleteRecord']),
    editRecord(value, id) {
      this.currentID = id;
      this.editCurrentRecord({ id: id, value: value });
    },
    startEditing(id) {
      this.editRecordActive = !this.editRecordActive;
      this.currentID = id;
    },
  },
};
</script>
<template>
  <div>
    <h1 class="h1">Показания</h1>
    <div v-if="recordsList.length > 0" class="list">
      <div
        v-for="record in filteredRecordsList"
        class="list-item"
        :key="record.id"
      >
        <div class="value">
          <span><b>ID:</b> {{ record.id }}</span>
          <span><b>Температура: </b> {{ record.temperature }} °C</span>
          <span><b>Дата обновления: </b>{{ record.date }}</span>
          <BasicForm
            v-if="editRecordActive && record.id === currentID"
            :saveHandler="editRecord"
            :value="temperature"
            title="Температура"
            :id="record.id"
          />
        </div>
        <div class="tools">
          <button class="button" @click="startEditing(record.id)">
            Редактировать
          </button>
          <button class="button" @click="deleteRecord({ id: record.id })">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Записей еще нет!</p>
    </div>
  </div>
</template>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
.list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid lightblue;
}
.value {
  display: flex;
  flex-direction: column;
}

.tools {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
