<template>
  <div>
    <!-- <UserSearch></UserSearch> -->
    <input type="text" v-model="serchData" @input="filterUsers()">
    <div v-if="serchData">
      <div style="padding: 10px;" v-for="i in ans">{{ i }}</div>
    </div>
    <div v-else>
      <div style="padding: 10px;" v-for="i in getUserData">{{ i }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserSearch from './UserSearch.vue'
export default {
  computed: {
    ...mapGetters('users', ['getUserData'])
  },
  components: { UserSearch },
  data() {
    return {
      ans: [],
      serchData: ''
    }
  },
  methods: {
    async filterUsers() {
      const lowerKeyword = this.serchData.toLowerCase();
      this.ans = await this.getUserData.filter((user) => {
        return user.name.toLowerCase().includes(lowerKeyword) | user
      },
        console.log('this.ans ', this.ans)
      );
    }
  }
}
</script>