import { defineStore } from "pinia";
import { ref } from "vue";
import { getUser } from "../../api/services";

interface UserStoreValue {
  login?: string;
  pub_key?: string;
  status: number | null;
}

export const useUserStore = defineStore("user", () => {
  const value = ref<UserStoreValue>();
  const statusFetch = ref(false)

  async function getUserData() {
    const { data, status } = await getUser();
    value.value = {
      login: data?.login,
      pub_key: data?.pub_key,
      status: status,
    };
    if(status === 200) {
      statusFetch.value = true
    }
  }

  return { value, getUserData, statusFetch };
});
