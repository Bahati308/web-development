<template>
  <header class="header">
    <div class="logo">
      <font-awesome-icon icon="gas-pump" />
      <h1>EazyMonitor</h1>
    </div>
    <div class="user-info">
      <span>Welcome, {{ userName }}</span>
      <div class="user-avatar">
        <font-awesome-icon icon="user" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Station Manager'
    }
  }
}
</script>
