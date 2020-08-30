<template>
    <div>
        
        <div class="main">
        <div class="hero_banner">
                <h1>NATAS3000©</h1>
                <div class="skill">
                    <ul>
                        <Li class="sub-title">Filmmaker</li>
                        <Li class="sub-title">Photographer</li>
                        <Li class="sub-title">Paris, France</li>
                    </ul>
                </div>
                <div class="copy">
                    <ul>
                        <Li class="corp">©2020 PORTFOLIO</li>
                    </ul>
                </div>
            </div>
            <div class="hero_footer">
                <div class="mail_tel">
                    <ul>
                        <Li class="corp">natas3000mail@gmail.com</li>
                        <Li class="corp">0650203014</li>
                    </ul>
                </div>
            </div>
            <VideosList :videos="videos"></VideosList>
        </div>
    </div>
</template>

<script>
import VideosList from "../components/VideosList.vue";
import gql from "graphql-tag";

export default {
  components: {
    VideosList
  },
  data() {
    return {
      videos: []
    };
  },
  apollo: {
    videos: gql`
      query	Videos{
        videos{
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
    `
  }
};
</script>