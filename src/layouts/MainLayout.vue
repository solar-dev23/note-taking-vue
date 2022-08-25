<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="row items-center justify-evenly p-0">
      <div class="column col-10">
        <q-toolbar>
          <q-toolbar-title>
            Note-taking application using VueJS
          </q-toolbar-title>

          <div>Jayden Jin</div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
