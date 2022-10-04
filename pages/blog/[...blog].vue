<template>
  <div>
    <v-container class="pt-4 pb-8">
      <div class="ma-3">
        <NuxtLink
          :to="`/blog/category/${content.category}`"
          class="text-button mb-2"
          >{{ content.category }}</NuxtLink
        >
        <h1 class="text-h2 mb-4">{{ content.title }}</h1>
        <div class="text-h6 mb-1">{{ content.tagline }}</div>
        <div class="text-subtitle-1">
          {{ formatDate(new Date(content.published)) }} · 最后编辑于
          {{ formatDate(new Date(content.updated)) }}
        </div>
      </div>
      <v-container class="mt-3">
        <div class="d-flex">
          <img :src="content.image" class="cover mx-auto" />
        </div>
        <ContentDoc class="markdown-render mt-3 main-content">
          <template #not-found> <NotFound /> </template> </ContentDoc
      ></v-container>
      <v-list-item three-line :to="`/members/${m.page}`">
        <div class="d-flex">
          <v-list-item-media>
            <v-avatar size="70">
              <img :src="`/dyn/avatars/${m.avatar}`" class="pfp-responsive" />
            </v-avatar>
          </v-list-item-media>

          <v-list-item-title class="ml-4">
            <v-list-item-title>{{ m.name }}</v-list-item-title>
            <v-list-item-subtitle style="text-overflow: unset; display: unset">
              <v-icon size="x-small" class="mr-1">{{ mdiBriefcase }} </v-icon
              >{{ m.title.join('、') }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon size="x-small" class="mr-1">{{ mdiEmail }} </v-icon
              >{{ m.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se
            </v-list-item-subtitle>
          </v-list-item-title>
        </div>

        <template #append>
          <div>
            <v-btn
              v-if="m.email"
              size="small"
              variant="text"
              color="grey lighten-1"
              :icon="mdiEmail"
              :href="`mailto:${m.email}@teahou.se`"
            ></v-btn>
            <v-btn
              v-if="m.github"
              size="small"
              variant="text"
              color="grey lighten-1"
              :icon="mdiGithub"
              :href="`https://github.com/${m.github}`"
            ></v-btn>
            <v-btn
              v-if="m.twitter"
              size="small"
              variant="text"
              color="grey lighten-1"
              :icon="mdiTwitter"
              :href="`https://twitter.com/${m.twitter}`"
            ></v-btn>
            <v-btn
              v-if="m.wiki"
              size="small"
              variant="text"
              color="grey lighten-1"
              :icon="siFandom.path"
              :href="`https://minecraft.fandom.com/zh/wiki/${m.wiki}`"
            ></v-btn>
            <v-btn
              v-if="m.website"
              size="small"
              variant="text"
              color="grey lighten-1"
              :icon="mdiWeb"
              :href="`${m.website}`"
            ></v-btn>
          </div>
        </template>
      </v-list-item>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import NotFound from '../404.vue'
import { mdiEmail, mdiGithub, mdiTwitter, mdiWeb, mdiBriefcase } from '@mdi/js'
import { siFandom } from 'simple-icons/icons'

import members from '@/data/members'

const route = useRoute()
const content = await queryContent({ path: route.path }).findOne()
const m = $ref(members.find((m) => m.page === content.author)!)

useHead({
  titleTemplate: `%s - 博客 - 茶馆工作室`,
})
</script>
<style lang="scss">
@import '~/assets/styles/markdown.scss';

a:not(:hover) {
  text-decoration: none;
}

.link,
.link:visited {
  color: rgb(var(--v-theme-primary));
}

.cover,
.resp {
  max-width: 100%;
  max-height: 50vh;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>
