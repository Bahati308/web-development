<template>
  <div class="status-cards">
    <div v-for="stat in stats" :key="stat.title" class="card">
      <div class="card-icon" :class="`bg-${stat.color}`">
        <font-awesome-icon :icon="stat.icon" />
      </div>
      <div class="card-info">
        <h3>{{ stat.title }}</h3>
        <p>{{ stat.value }}</p>
        <span class="status-text">{{ stat.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true
    }
  }
}
</script>
