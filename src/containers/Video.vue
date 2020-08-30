<template>
<div>
    <div class="nav_video_top">
        <ul>
            <li>
                <a href="/">BACK</a>
            </li>
            <li>
                <p class="b">{{video.artiste}}</p>
                <p>{{video.title}}</p>
                <p>{{video.feat}}</p>
            </li>
        </ul>
    </div>
    <div class="video_container_single">
            <video 
                muted="muted" 
                playsinline="" 
                loop="loop"
                autoplay="true"
                controls 
                class="video_loop" 
                :src="api_url + video.video.url" 
                :poster="api_url + video.thumbnail.url">
            </video>
    </div>
    
</div>
</template>

<script>
var moment = require("moment");

import gql from "graphql-tag";

export default {
  data() {
    return {
      video: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },

  apollo: {
    video: {
      query: gql`
       query Videos($id: ID!) {
          video(id: $id) {
                id
                title
                feat
                artiste
                thumbnail{
                    url
                }
                video{
                    url
                }
            }
            }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>