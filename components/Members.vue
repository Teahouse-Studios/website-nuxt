<template>
  <div class="container mx-auto mb-4">
    <h1 class="text-5xl font-extrabold my-4">成员</h1>
    <p class="mb-4">
      茶馆工作室目前有
      <!-- {{ members.length }} -->24 位成员。他们来自五湖四海，精通各项技能。
    </p>
    <ul class="">
      <div v-for="m in members" :key="m.name">
        <v-list-item three-line :to="`/members/${m.page}`">
          <div class="flex">
            <v-avatar size="70">
              <nuxt-img
                :src="`/dyn/avatars/${m.avatar}`"
                class="pfp-responsive"
              />
            </v-avatar>

            <v-list-item-title class="ml-4">
              <v-list-item-title>{{ m.name }}</v-list-item-title>
              <v-list-item-subtitle
                style="text-overflow: unset; display: unset"
              >
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
        <v-divider></v-divider>
      </div>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { mdiEmail, mdiGithub, mdiTwitter, mdiWeb, mdiBriefcase } from '@mdi/js'
import si from 'simple-icons'
const { siFandom } = si

import members from '@/data/members'
</script>
