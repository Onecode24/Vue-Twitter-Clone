<template>
  <div id="app" class="flex container w-full h-full">
    <!--nav bar-->
    <div class="w-1/5 border-r border-blue-200 px-8 pt-2 max-h-full">
      <button class="h-12 w-12 text-blue-300 text-3xl rounded-full text-blue">
        <font-awesome-icon icon="fab fa-twitter" />
      </button>
      <div v-for="item in navBarIcon" :key="item.icon">
        <button @click="id= item.name" :class="`flex items-center py-2 px-4 hover:text-blue-300 rounded-full mr-auto ${id===item.name ? 'text-blue-400' : '' } `">
          <font-awesome-icon :icon="item.icon" class="text-xl "/> <span class="text-lg pl-6 font-semibold">{{ item.name }}</span>
        </button>
      </div>
      <div class="tweet pt-6">
        <button class="w-5/6 ml-4 rounded-2xl bg-blue-400 text-lg py-1 shadow-lg shadow-slate-500 text-white">Tweet</button>
      </div>
    </div>

    <!--main content--> 
    <div class="home border-r w-3/5">
      <div class=" flex justify-between pt-3 border-b-2 p-2">
        <span class="text-2xl font-bold">Home</span> <font-awesome-icon icon="fas fa-star" class="text-blue-300 mt-2 text-xl" />
      </div>
      <div class="new-post flex border-b pb-3">
        <div class="profil pt-4">
          <img src="./assets/avatar_prolfil.png" alt="profil" class="w-12  border rounded-full border-gray-400 ml-2">
        </div>
        <div class="infos pt-6 pl-6 w-full">
          <p class="text-lg text-gray-400">What's happening ?</p>
          <div class="foot flex justify-between pt-4 w-full ">
            <div class="emoji flex w-24 justify-between">
              <font-awesome-icon icon="fas fa-image" class="text-blue-300 cursor-pointer text-xl" />
              <font-awesome-icon icon="fa-solid fa-film" class="text-blue-300 text-xl cursor-pointer" />
              <font-awesome-icon icon="fa-solid fa-chart-bar" class="text-blue-300 text-xl cursor-pointer " />
              <font-awesome-icon icon="fa-solid fa-face-grin" class="text-blue-300 text-xl cursor-pointer" />
            </div>
            <button class="px-2 ml-4 rounded-2xl bg-blue-400 text-xl h-1/2 mr-5 w-24 text-white ">Tweet</button>
          </div>
        </div>
       
      </div>
      <template v-for="item in userInfos" :key="item.username" >
        
          <NewTweet :user="item" :tweet="item.tweet" class="w-full"/>
        
      </template>
    </div>
  </div>
</template>

<script>
import NewTweet from './components/New-tweet.vue'

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
      ],
      userInfos:[
        {name: 'John Doe', username: '@johndoe', time: '2h',
          tweet : {
            text: 'Pourquoi ne pas utiliser Vue.js ? ',
            image: 'https://unsplash.com/photos/v9bnfMCyKbg',
            video: '../assets/avatar_prolfil.png',
            emoji: 'fa-solid fa-image',
            comment: 0,
            like: 1,
            retweet: 2,
            share: 0,
          }
        },
        {name: 'Albert Einstein', username: '@albert', time: '1h',
          tweet : {
            text: 'la vie est un mystère qu\'il faut vivre, et non pas la chercher à la découvrir.',
            image: '../assets/avatar_prolfil.png',
            video: '../assets/avatar_prolfil.png',
            emoji: 'fa-solid fa-image',
            comment: 20,
            like: 1025,
            retweet: 501,
            share: 10,
          }
        },
        {name: 'Salomon', username: '@salomon', time: '1m',
          tweet : {
            text: 'Pourquoi les gens ne veulent pas mourir ? Parce que c\'est leur seule chance.',
            image: '../assets/avatar_prolfil.png',
            video: '../assets/avatar_prolfil.png',
            emoji: 'fa-solid fa-image',
            comment: 2,
            like: 10,
            retweet: 5,
            share: 1,
          }
        },
      ],
      id: 'Home',  
    }
  },
  components: {
    NewTweet
}


}
</script>

<style src="./assets/tailwind.css"></style>
