<template>
  <div class="dashboard">
    <Header />
    <div class="main-content">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Dashboard
  }
}
</script>

<style>
/* Global styles would go here */
@import './assets/styles.css';
</style>
