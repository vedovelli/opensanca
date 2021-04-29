<template>
  <input type="search" placeholder="Search for a user" @input="search" />
</template>

<script>
import { useStore } from "vuex";
import debounce from "lodash/debounce";

export default {
  props: {
    context: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const search = debounce((ev) => {
      store.dispatch(props.context, ev.target.value);
    }, 500);

    const exposes = {
      search,
    };

    return exposes;
  },
};
</script>
