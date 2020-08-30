<template>
    <div class="video_container" id="film"> 
        <router-link
          v-for="video in videos"
          :to="{ path: '/video/' + video.id }"
          class="video"
          :key="video.id"
        >
           
            <img :src="api_url + video.thumbnail.url">      
            <div class="info">
                <div class="titre">
                    <p id="title" class="b">{{ video.title }}</p>
                    <p id="feat" class="b">{{ video.feat }}</p>
                </div>
                <p id="artiste" class="b">{{ video.artiste }}</p>
            </div>
           
         
        </router-link>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    videos: Array
  }
};
</script>