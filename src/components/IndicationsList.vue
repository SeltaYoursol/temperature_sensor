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
    <h1>список всех показаний</h1>
    <div v-if="recordsList.length > 0" class="list">
      <div v-for="record in recordsList" class="list-item" :key="record.id">
        <div class="value">
          <span>{{ record.id }}</span>
          <span>{{ record.temperature }}</span>
          <span>{{ record.date }}</span>
        </div>
        <div class="tools">
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Записей еще нет!</p>
    </div>
  </div>
</template>
