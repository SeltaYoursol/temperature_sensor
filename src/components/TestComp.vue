<template>
  <div class="form">
    <div class="form-item">
      <label class="form-item__label" for="temperature">Температура</label>
      <input
        class="form-item__input"
        type="text"
        id="temperature"
        v-model="temperature"
        placeholder="Введите данные"
      />
    </div>
    <button class="button">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'TestComp',
  temperature: '',
};
</script>

<style scoped></style>
