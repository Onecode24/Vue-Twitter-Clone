<template>
  <div id="app" class="flex container h-screen w-full">
    <!--nav bar-->
    <div class="w-1/5 border-r border-blue-200 px-8 pt-2">
      <button class="h-12 w-12 text-blue-300 text-3xl rounded-full text-blue">
        <font-awesome-icon icon="fab fa-twitter" />
      </button>
      <div v-for="item in navBarIcon" :key="item.icon">
        <button class="flex items-center py-2 px-4 hover:text-blue-300 rounded-full mr-auto  ">
          <font-awesome-icon :icon="item.icon" class="text-xl "/> <span class="text-lg pl-6">{{ item.name }}</span>
        </button>
      </div>
      <div class="tweet pt-6">
        <button class="w-5/6 ml-4 rounded-2xl bg-blue-400 text-lg py-1 shadow-lg shadow-slate-500">Tweet</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      navBarIcon: [
        {icon : 'fa-solid fa-house', name: 'Home'},
        {icon : 'fa-solid fa-hashtag', name: 'Explore'},
        {icon : 'fa-solid fa-bell', name: 'Notifications'},
        {icon : 'fa-solid fa-envelope', name: 'Message'},
        {icon : 'fa-solid fa-bookmark', name: 'Bookmark'},
        {icon : 'fa-solid fa-list', name: 'List'},
        {icon : 'fa-solid fa-user', name: 'Profile'},
        {icon : 'fa-solid fa-ellipsis', name: 'more'},

      ]  
    }
  },
  components: {

  }
}
</script>

<style src="./assets/tailwind.css"></style>
