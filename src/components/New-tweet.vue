<template>
    <div class="flex pl-4 p-3 w-full border-b-2">
        <div>
            <img src="../assets/avatar_prolfil.png" alt="profil" class="w-12  border rounded-full border-gray-300 ml-2 cursor-pointer">
        </div>
        <div class="content mt-2">
            <div class="bar flex justify-between max-w-full">
                <div class="user cursor-pointer">
                    <span class="name font-bold mr-2 ml-3">{{ user.name }}</span>
                    <span class="username text-gray-400">{{ user.username }}</span>
                    <span class="time text-gray-400"> . {{user.time}}</span>
                </div>
                <div class="option">
                    <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="text-gray-400 cursor-pointer" />
                </div>
            </div>
            <div class="tweet ml-5 ">
                <p class="pt-2">{{ tweet.text }}</p>
                <img src="../assets/perroquet.jpg" alt="" class="rounded-2xl w-80 ml-2 mt-2 cursor-zoom-in">
            </div>
            <div class="foot text-gray-400 flex justify-around w-full mt-2">
                
                <div class="comment">
                    <font-awesome-icon icon="fa-solid fa-comment" />
                    <span class="ml-1">{{tweet.comment}}</span>
                </div>
                <div class="comment">
                    <font-awesome-icon icon="fa-solid fa-retweet" class="text-green-400" />
                    <span class="ml-1">{{tweet.retweet}}</span>
                </div>
                <div class="comment">
                    <font-awesome-icon icon="fa-solid fa-heart" class="text-red-400"/>
                    <span class="ml-1">{{tweet.like}}</span>
                </div>
                <div class="comment">
                     <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                    <span class="ml-1">{{tweet.share}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user', 'tweet'],
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>