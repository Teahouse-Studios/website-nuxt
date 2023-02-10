<template>
  <div class="container mx-auto">
    <section class="flex flex-column md:flex-row mt-24 mb-12 items-center">
      <div class="w-full pr-4">
        <h1
          class="text-7xl font-extrabold tracking-tight text-slate-900 mb-3 leading-tight"
        >
          源于 Minecraft，<br />
          我们不断前进。
        </h1>
        <div class="text-lg mb-4">
          茶馆工作室专注于 Minecraft
          等游戏的周边内容创作，创作出了多款创意资源、语言附加包，致力于为玩家提供更欢乐的游戏体验。
        </div>
        <div class="mb-4">
          <TButton
            class="mr-2"
            @click="
              ;($refs.about as HTMLElement).scrollIntoView({
                behavior: 'smooth',
              })
            "
            >了解更多</TButton
          >
          <TButton class="!bg-[#946ce6]" href="https://afdian.net/@teahouse">
            赞助我们
          </TButton>
        </div>
      </div>
      <v-carousel
        v-model="video"
        class="rounded-lg mx-auto"
        style="height: 100% !important"
        show-arrows
      >
        <v-carousel-item v-for="v in videos" :key="v">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              :src="v"
              title="Bilibili 视频"
              allowfullscreen
              framespacing="0"
              class="rounded-lg overflow-hidden"
            >
            </iframe>
          </div>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="mb-12">
      <h2 class="text-4xl font-extrabold mb-4">新闻</h2>
      <News />
      <TButton class="mt-4" to="/blog">更多新闻</TButton>
    </section>
    <v-divider></v-divider>
    <section ref="about" class="mb-12">
      <div class="flex items-center justify-center">
        <v-row class="px-4">
          <v-col cols="12" md="6" class="d-flex items-center justify-center">
            <nuxt-img src="/avatars.png" class="block" style="width: 100%" />
          </v-col>
          <v-col cols="12" md="6" class="text-right flex items-center">
            <div>
              <h2
                class="font-extrabold text-4xl mb-3"
                style="line-height: 3.75rem"
              >
                我们是谁？
              </h2>
              <div class="mb-3">
                我们是一群热爱 Minecraft
                游戏的玩家，我们中的大部分人出身于全球最大的 Minecraft
                百科全书网站
                <ExLink href="https://minecraft.fandom.com/zh/"
                  >Minecraft Wiki</ExLink
                >，拥有良好的游戏译名翻译经验。其他成员大部分来自 Minecraft
                社区中的其他部分和开源社区团队。我们的目标是为游戏玩家提供更好的体验。
              </div>
              <TButton to="/members/"> 了解成员 </TButton>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section class="fp-block">
      <v-container class="d-flex items-center justify-center block-height">
        <v-row class="px-4">
          <h2
            class="font-extrabold text-4xl w-full flex items-center justify-center text-h3 font-weight-bold mb-3"
          >
            我们的产品
          </h2>
          <v-col cols="12" md="4">
            <div>
              <h3
                class="font-extrabold text-2xl mb-3"
                style="line-height: 3.75rem"
              >
                梗体中文资源包
              </h3>
              <div class="text-subtitle-1 mb-3">
                梗体中文资源包由本工作室成员、中文 Minecraft Wiki 行政员
                Lxazl5770 于 2020 年 1 月创始。此资源包致力于打造更娱乐的
                Minecraft
                游戏体验。它将一部分游戏内容译名或其他游戏内字符串替换成了一些梗和笑话。梗体中文资源包一经推出广受好评，获得了多位
                UP 主的推荐和其他玩家的认可，并成功上架网易我的世界中国版。截止
                2022 年 4 月，梗体中文资源包全平台累计下载量超过 10 万次。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                :prepend-icon="mdiArrowRight"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h3
                class="font-extrabold text-2xl mb-3"
                style="line-height: 3.75rem"
              >
                小可
              </h3>
              <div class="text-subtitle-1 mb-3">
                小可是基于多个框架开发的可扩展、多平台聊天机器人，有 MediaWiki
                网站条目信息获取、MediaWiki 维护实用工具、GitHub 查询、Minecraft
                相关信息查询、音游信息查询等多个功能。小可支持
                Telegram、Discord、QQ、QQ 频道多平台。我们正在进行 QQ
                频道官方机器人入驻开发，未来可能会成为官方认证的机器人。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                :prepend-icon="mdiArrowRight"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <h3
                class="font-extrabold text-2xl mb-3"
                style="line-height: 3.75rem"
              >
                Minecraft 文言资源包
              </h3>
              <div class="text-subtitle-1 mb-3">
                Minecraft 文言资源包由本工作室成员 Dianliang233 于 2020 年 1
                月创始。此资源包为 Minecraft
                新增了一个语言——文言。文言项目创始之后，立刻得到多方支持。其中，原中文
                Minecraft Wiki 管理员 Cuervo 在 Crowdin
                上申请了官方语言支持。2021 年 1
                月，文言成为了官方支持的语言项目。文言计现由文言翻译审核员管理。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                :prepend-icon="mdiArrowRight"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn to="/products/" variant="text" :prepend-icon="mdiApps"
              >更多产品</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
  <div class="flex justify-center prose-sm fixed bottom-2 w-full select-none">
    <v-icon left>{{ mdiChevronDown }}}</v-icon> 向下滚动
  </div>
</template>

<script lang="ts" setup>
import {
  mdiAccountMultiple,
  mdiArrowRight,
  mdiApps,
  mdiCash,
  mdiChevronDown,
  mdiNewspaperVariantOutline,
} from '@mdi/js'

import ExLink from '@/components/ExLink.vue'
import News from '~~/components/News.vue'

let video = $ref(0)
const videos = [
  'https://player.bilibili.com/player.html?aid=716333939&bvid=BV1ZX4y1A7jY&cid=357776775&page=1',
  'https://player.bilibili.com/player.html?aid=889128743&bvid=BV1gK4y1u7Qs&cid=370637043&page=1',
]

function formatDate(date: Date) {
  return `${date.getFullYear()} 年 ${
    date.getMonth() + 1
  } 月 ${date.getDate()} 日`
}
useHead({
  title: '茶馆工作室',
})
</script>
