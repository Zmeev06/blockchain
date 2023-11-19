import { defineStore } from "pinia";
import { ref } from "vue";
import { getBalance } from "../../api/services";

interface BalanceStoreValue {
  balance?: number | null;
  status: number | null;
}

export const useBalanceStore = defineStore("balance", () => {
  const value = ref<BalanceStoreValue>();
  const statusFetch = ref(false);

  async function getBalanceData() {
    const { data, status } = await getBalance();
    value.value = {
      balance: data,
      status: status,
    };
    if (status === 200) {
      statusFetch.value = true;
    }
  }

  return { value, getBalanceData, statusFetch };
});
