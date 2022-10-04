<template>
  <div>
    <v-container class="pt-4 pb-8">
      <v-btn
        class="ml-n3"
        to="/members/"
        variant="text"
        size="small"
        :prepend-icon="mdiChevronLeft"
        >成员</v-btn
      >
      <v-divider class="mt-2"></v-divider>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <h1 class="text-h4 mt-6 mb-3 d-inline-block">
              <v-avatar size="50"
                ><img
                  :src="`/dyn/avatars/${member.avatar}?url`"
                  class="pfp-responsive"
              /></v-avatar>
              <span class="ml-3" style="vertical-align: middle">{{
                member.name
              }}</span>
            </h1>
          </v-col>

          <v-col cols="12" md="6" class="text-right mt-6">
            <v-btn
              v-if="member.email"
              variant="text"
              color="grey lighten-1"
              :icon="mdiEmail"
              :href="`mailto:${member.email}@teahou.se`"
            ></v-btn>
            <v-btn
              v-if="member.github"
              variant="text"
              color="grey lighten-1"
              :icon="mdiGithub"
              :href="`https://github.com/${member.github}`"
            ></v-btn>
            <v-btn
              v-if="member.twitter"
              variant="text"
              color="grey lighten-1"
              :icon="mdiTwitter"
              :href="`https://twitter.com/${member.twitter}`"
            ></v-btn>
            <v-btn
              v-if="member.wiki"
              variant="text"
              color="grey lighten-1"
              :icon="siFandom.path"
              :href="`https://minecraft.fandom.com/zh/wiki/User:${member.wiki}`"
            ></v-btn>
            <v-btn
              v-if="member.website"
              variant="text"
              color="grey lighten-1"
              :icon="mdiWeb"
              :href="`${member.website}`"
            ></v-btn>
          </v-col>
        </v-row>
      </div>

      <v-list-item-subtitle class="text-subtitle">
        <v-icon size="x-small" class="mr-1">{{ mdiBriefcase }} </v-icon
        >{{ member.title.join('、') }}
      </v-list-item-subtitle>
      <v-list-item-subtitle v-if="member.email" class="text-subtitle">
        <v-icon size="x-small" class="mr-1">{{ mdiEmail }} </v-icon
        ><a :href="`mailto:${member.email}`"
          >{{ member.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se</a
        >
      </v-list-item-subtitle>

      <v-divider class="my-6"></v-divider>

      <v-list-item-subtitle class="mb-3">介绍</v-list-item-subtitle>
      <v-card>
        <v-container class="markdown-render">
          <ContentDoc>
            <template #not-found> <NotFound /> </template> </ContentDoc
        ></v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import {
  mdiChevronLeft,
  mdiEmail,
  mdiGithub,
  mdiTwitter,
  mdiWeb,
  mdiBriefcase,
} from '@mdi/js'
import { siFandom } from 'simple-icons/icons'
import NotFound from '../404.vue'

import members from '@/data/members'

const route = useRoute()
const name = route.path.split('/').pop()
const member = $ref(members.find((m) => m.page === name)!)

useHead({
  titleTemplate: () => {
    return `${member.name}：${member.title.join('、')} - 成员 - 茶馆工作室`
  },
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
</style>
