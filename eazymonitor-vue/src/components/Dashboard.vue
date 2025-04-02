<template>
  <div class="content-area">
    <StatusCards :stats="stats" />
    <FuelTanks :tanks="tanks" @low-fuel="handleLowFuel" />
    <Transactions :transactions="transactions" />
    <Alerts :alerts="alerts" @acknowledge="handleAcknowledge" />
  </div>
</template>

<script>
import StatusCards from './StatusCards.vue'
import FuelTanks from './FuelTanks.vue'
import Transactions from './Transactions.vue'
import Alerts from './Alerts.vue'
import { useGasStation } from '../composables/useGasStation'

export default {
  components: { StatusCards, FuelTanks, Transactions, Alerts },
  setup() {
    const {
      stats,
      tanks,
      transactions,
      alerts,
      handleLowFuel,
      handleAcknowledge,
      updateData
    } = useGasStation()

    // Set up intervals for data updates
    setInterval(updateData, 5000)

    return {
      stats,
      tanks,
      transactions,
      alerts,
      handleLowFuel,
      handleAcknowledge
    }
  }
}
</script>
