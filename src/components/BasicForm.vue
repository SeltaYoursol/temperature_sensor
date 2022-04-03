<script>
export default {
  props: ['saveHandler', 'value', 'title', 'id'],
};
</script>
<template>
  <div class="form">
    <div class="form-item">
      <label class="form-item__label" :for="id">{{ title }}</label>
      <input
        class="form-item__input"
        type="text"
        :id="id"
        v-model="value"
        placeholder="Введите данные"
      />
    </div>
    <button class="button" @click.prevent="saveHandler(value)">
      Сохранить
    </button>
  </div>
</template>
<style scoped>
.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
}
.form-item__input {
  padding: 6px 5px;
}
</style>
