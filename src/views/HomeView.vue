<script setup lang="ts">
import RequestQuoteForm from "../components/requestQuoteForm.vue";
import TestimonialComponent from "../components/testimonialComponent.vue";
import TeamMembersComponent from "../components/teamMembersComponent.vue";
import RecentNewsComponent from "../components/recentNewsComponent.vue";
import AboutOutCompanyComponent from "../components/AboutOutCompanyComponent.vue";
import OurServicesComponent from "../components/ourServicesComponent.vue";
// import headerComponent from "@/components/headerComponent.vue";
</script>

<template>
  <main>
    <!--? slider Area Start-->
    <div class="slider-area">
      <div class="slider-active">
        <!-- Single Slider -->
        <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 col-lg-9">
                <div class="hero__caption">
                  <h1>Safe & Reliable <span>Logistic</span> Solutions!</h1>
                </div>
                <!--Hero form -->
                <form action="#" class="search-box">
                  <div class="input-form">
                    <input type="text" placeholder="Your Tracking ID" />
                  </div>
                  <div class="search-form">
                    <a href="#">Track & Trace</a>
                  </div>
                </form>
                <!-- Hero Pera -->
                <div class="hero-pera">
                  <p>For order status inquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- slider Area End-->
    <!--? our info Start -->
    <div class="our-info-area pt-70 pb-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-info mb-30">
              <div class="info-icon">
                <span class="flaticon-support"></span>
              </div>
              <div class="info-caption">
                <p>Call Us Anytime</p>
                <span>+ (123) 1800-567-8990</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-info mb-30">
              <div class="info-icon">
                <span class="flaticon-clock"></span>
              </div>
              <div class="info-caption">
                <p>Sunday CLOSED</p>
                <span>Mon - Sat 8.00 - 18.00</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-info mb-30">
              <div class="info-icon">
                <span class="flaticon-place"></span>
              </div>
              <div class="info-caption">
                <p>Columbia, SC 29201</p>
                <span>USA, New York - 10620</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- our info End -->
    <!--? Categories Area Start -->
    <OurServicesComponent />
    <!-- Categories Area End -->
    <!--? About Area Start -->
    <AboutOutCompanyComponent />
    <!-- About Area End -->
    <!--? contact-form start -->
    <RequestQuoteForm />
    <!-- contact-form end -->
    <!--Team Ara Start -->
    <TeamMembersComponent />
    <!-- Team Ara End -->
    <!--? Testimonial Start -->
    <TestimonialComponent />
    <!-- Testimonial End -->
    <!--? Blog Area Start -->
    <RecentNewsComponent />
    <!-- Blog Area End -->
  </main>
</template>
