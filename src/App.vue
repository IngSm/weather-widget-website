<script setup lang="ts">
import { ref, toRefs } from 'vue';

import { useScroll } from '@vueuse/core'

import Application from '../weather-widget-new/src/App.vue'

import cloud from '@/assets/cloud.svg'
import cloudSun from '@/assets/cloud-with-sun.svg'
import win from '@/assets/windows-brands.svg'
import apple from '@/assets/apple-brands.svg'
import linux from '@/assets/linux-brands.svg'

const el = ref<HTMLElement | null>(null)

const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
const { left, right, top, bottom } = toRefs(arrivedState)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)

const download = ref(false);
const tryIt = ref(false)

const showAction = (btn: string):void => {
  if (btn === 'download') {
    download.value = true
    tryIt.value = false
  } else if ( btn === 'try' ) {
    download.value = false
    tryIt.value = true
  }
}
</script>

<template>
  <div class="main">
    <Header class="header" />
    <div ref="el" class="content">

      <div class="content__text">
        <div class="content__text-wrap">
          <h2 v-text="'Namaste to everybody! :)'" />
          <p v-text="'My name is Alexander! I am a frontend developer.'" />
          <p v-text="'To be honest, this is my first Hackathon and it is an honor for me to take part in Microsoft Azure + DEV hackathon.'" />
        </div>
        <img class="cloud" :src="cloudSun" alt="cloud">
      </div>

      <div class="content__text">
        <div class="content__text-wrap content__text_center">
          <h2 v-text="'At the beginning...'" />
          <p v-text="'I created this application as a test task for a company.'" />
          <p v-text="'But then I failed to find a desktop time application for Windows with an opportunity to add different timezones.'" />
        </div>
      </div>

      <div class="content__text">
        <img class="cloud" :src="cloud" alt="cloud">
        <div class="content__text-wrap content__text_right">
          <h2 v-text="'A journey started...'" />
          <p v-text="'That is why I decided to create such an application by myself.'" />
          <p v-text="'I gained my frontend skill and viola! I created it using Vue.js and Electron. Also, I decided to give it a way at show it on this hackathon :)'" />
        </div>
      </div>

      <div class="content__text">
        <div class="content__text-wrap content__text_center">
          <h2 v-text="'What\'s next?'" />
          <p v-text="'You may:'" />
          <div class="content__text-wrap_flex">
            <button @click="showAction('download')" v-text="'Download it'" />
            <button @click="showAction('try')" v-text="'Try it'" />
          </div>
          <p v-text="'I hope you will enjoy it :)'" />
        </div>
      </div>

      <div v-if="download" class="content__text">
        <div class="content__text-wrap content__text_center">
          <div class="content__text-wrap_flex">
              <button class="content__down-btn">
                <img class="content__down-btn-img" :src="win" alt="">
              </button>
              <button class="content__down-btn">
                <img class="content__down-btn-img" :src="apple" alt="">
              </button>
              <button class="content__down-btn">
                <img class="content__down-btn-img" :src="linux" alt="">
              </button>
          </div>
        </div>
      </div>

      <div v-if="tryIt" class="content__text">
        <div class="content__app">
          <Application />
        </div>
      </div>

    </div>
    <Footer class="footer" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Genos:wght@100;300;700&display=swap');

* {
  font-family: 'Genos', sans-serif;
  font-weight: 300;
  font-size: 20px;
}

body {
  margin: 0;
  width: 100%;
  overflow: hidden;
}

.main {
  height: 100vh;
  display: grid;
  grid-template-areas:
    'h h'
    'c c'
    'f f'
  ;
}

.header {
  grid-area: h;
}

.content {
  overflow: auto;
  grid-area: c;
  display: grid;
  gap: 50px;
  padding: 50px 0;
  position: relative;
  background: #00a6ff;
}

.content::-webkit-scrollbar {
  background: transparent;
  width: 5px;
}
.content::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}

.content__text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: white;
}

.content__text_right {
  text-align: right;
}

.content__text_center {
  text-align: center;
}

.content__text-wrap_flex {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.content__text-wrap_flex button {
  width: 150px;
  appearance: none;
  border: 1px solid rgba($color: #FFFFFF, $alpha: .6);
  border-radius: 5px;
  background: none;
  color: #FFFFFF;
  cursor: pointer;
  transition: ease .3s;
}

.content__text-wrap_flex button:hover {
  background: #FFFFFF;
  color: #00a6ff
}

.content__text-wrap_flex button:focus {
  box-shadow: 0px 0px 15px #FFFFFF;
}

.content__text-wrap_flex button:active {
  box-shadow: 0px 0px 15px #FFFFFF;
}

.content__text h2 {
  font-weight: 700;
  font-size: 28px;
}

.cloud {
  width: 300px;
  height: 150px;
}

.content__down-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: auto !important;
  color: #FFFFFF;
}

.content__down-btn-img {
  width: 50px;
  height: 50px;
}

.content__app {
  width: 800px;
  height: 300px;
  background: white;
  border-radius: 5px;
}

// .content__app-wrap {
//   width: 100%;
//   height: 100%;
// }

.footer {
  grid-area: f;
}
</style>
