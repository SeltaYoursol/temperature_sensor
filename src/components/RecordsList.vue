<script>
export default {
  computed: {
    recordsList() {
      return this.$store.state.recordsList;
    },
  },
};
</script>
<template>
  <div>
    <h1 class="h1">Показания</h1>
    <div v-if="recordsList.length > 0" class="list">
      <div v-for="record in recordsList" class="list-item" :key="record.id">
        <div class="value">
          <span><b>ID:</b> {{ record.id }}</span>
          <span><b>Температура: </b> {{ record.temperature }} °C</span>
          <span><b>Дата обновления:</b>{{ record.date }}</span>
        </div>
        <div class="tools">
          <button class="button">Редактировать</button>
          <button class="button">Удалить</button>
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
