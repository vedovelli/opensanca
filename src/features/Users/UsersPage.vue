<template>
  <div class="about">
    <search context="users/setSearch" />
    <ul style="list-style: none">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Search from "../../Shared/Search.vue";

export default {
  components: { Search },
  setup() {
    const store = useStore();

    store.dispatch("users/fetchUsers");

    const exposes = {
      users: computed(() => store.getters["users/users"]),
    };

    return exposes;
  },
};
</script>
