<script setup lang="ts"></script>

<template>
  <div class="header-main">
    <h1 v-text="'Alexander Gorbunov'" />
    <div class="footer__contacts">
      <div class="footer__contact_item">
        <h2 v-text="'DEV:'" />
        <span v-text="'@ingsm'" />
      </div>
      <div class="footer__contact_item">
        <h2 v-text="'Twitter:'" />
        <span v-text="'@AlexWSD'" />
      </div>
    </div>
    <div class="footer__contacts">
      <a href="https://github.com/IngSm/weather-widget-new">
        <h2 v-text="'GitHub'"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header-main {
  height: 100px;
  background: white;
}

h1 {
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  color: #00a6ff;
  text-align: center;
}

h2 {
  font-weight: 700;
  margin: 0;
}

a {
  color: #00a6ff;
}

.footer__contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #00a6ff;
}

.footer__contact_item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__contact_item span {
  font-weight: 100;
}
</style>
