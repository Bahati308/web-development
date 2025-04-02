<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.name" :class="{ active: item.active }">
          <a href="#" @click.prevent="setActive(item)">
            <font-awesome-icon :icon="item.icon" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Dashboard', icon: 'tachometer-alt', active: true },
        { name: 'Fuel Levels', icon: 'gas-pump', active: false },
        { name: 'Sales Analytics', icon: 'chart-line', active: false },
        { name: 'Alerts', icon: 'bell', active: false },
        { name: 'Settings', icon: 'cog', active: false }
      ]
    }
  },
  methods: {
    setActive(clickedItem) {
      this.menuItems.forEach(item => {
        item.active = item.name === clickedItem.name
      })
    }
  }
}
</script>
