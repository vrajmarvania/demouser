<template>
  <UserProfileCard ></UserProfileCard>
</template>
<script >
import { mapActions ,mapGetters} from 'vuex';
import UserProfileCard from './components/UserProfileCard.vue';

export default{
  components:{UserProfileCard},
  mounted(){
   this.fetchUserDetails()
  },
  methods:{
    ...mapActions('users', ['fetchUserDetails']),
  }
}
</script>
