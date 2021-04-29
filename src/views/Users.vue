<template>
  <div class="users">
    <users-page />
  </div>
</template>

<script>
import UsersPage from "../features/Users/UsersPage.vue";
export default {
  name: "UsersView",
  components: { UsersPage },
};
</script>
