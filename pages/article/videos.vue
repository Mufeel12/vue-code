 
<template>
  <div class="leads-container">
    <div class="row mb-4">
      <div class="col-md-12 mb-4">
        <h2 class="title">Video reads</h2>
      </div>
      <div class="col-md-9 col-12">
        <div class="video">
          <video-player :src="val.src" />
        </div>
        <div class="col-md-12 mb-4 mt-4">
          <h2 class="title">youtube reads</h2>
        </div>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?showinfo=0&controls=1&autohide=1"></iframe>
        </div>
        <div class="col-md-12 mb-4 mt-4">
          <h2 class="title">vimeo reads</h2>
        </div>
        <div class="video embed-container">
          <iframe src="https://player.vimeo.com/video/208791851"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videoPlayer from "~/components/videoPlayer";
export default {
  components: {
    videoPlayer
  }
};
</script>
