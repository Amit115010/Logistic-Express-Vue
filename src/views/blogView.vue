<script setup lang="ts">
import blogsComponent from "../components/blogsComponent.vue";
import CategorylisComponents from "../components/categorylisComponents.vue";
import RecentPostComponent from "../components/recentPostComponent.vue";
import TagwidgetComponent from "../components/tagwidgetComponent.vue";
import InstagramFeedComponent from "../components/instagramFeedComponent.vue";
import NewslatterWidgetComponent from "../components/newslatterWidgetComponent.vue";
import SearchWidgetComponent from "../components/searchWidgetComponent.vue";
</script>
<template>
  <main>
    <!--? slider Area Start-->
    <div class="slider-area">
      <div
        class="single-slider hero-overly slider-height2 d-flex align-items-center"
        data-background="src/assets/img/hero/about.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap">
                <h2>Blog</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Blog</a></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- slider Area End-->
    <!--================Blog Area =================-->
    <section class="blog_area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <blogsComponent />
          </div>
          <div class="col-lg-4">
            <div class="blog_right_sidebar">
              <SearchWidgetComponent />
              <CategorylisComponents />

              <RecentPostComponent />
              <TagwidgetComponent />

              <InstagramFeedComponent />

              <NewslatterWidgetComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================Blog Area =================-->
  </main>
</template>
