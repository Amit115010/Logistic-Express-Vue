<script setup lang="ts">
import OurServicesComponent from "../components/ourServicesComponent.vue";
</script>
<template>
  <main>
    <!--? slider Area Start-->
    <div class="slider-area">
      <div
        class="single-slider hero-overly slider-height2 d-flex align-items-center"
        data-background="assets/img/hero/about.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap">
                <h2>Our Services</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">Our Services</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- slider Area End-->
    <!--? Categories Area Start -->
    <OurServicesComponent />
    <!-- Categories Area End -->
  </main>
</template>
