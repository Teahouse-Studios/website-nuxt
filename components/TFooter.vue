<template>
  <v-footer
    style="background-color: #323437; padding: 30px"
    class="pt-10 py-8 px-12 text-white"
    dark
  >
    <v-container>
      <v-row>
        <v-col
          md="6"
          cols="12"
          class="link-list flex text-left items-center md:items-start flex-column"
          style="line-height: 24px"
        >
          <div>
            <div>
              <span class="text-sm mr-3 block md:inline">关注我们</span>

              <v-btn
                variant="text"
                icon
                size="small"
                href="https://teahouse.team/"
              >
                <v-icon>{{ mdiWeb }}</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                icon
                size="small"
                href="https://story.teahouse.team/"
              >
                <v-icon>{{ mdiNewspaperVariantOutline }}</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                icon
                size="small"
                href="mailto:admin@teahou.se"
              >
                <v-icon>{{ mdiEmail }}</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                icon
                size="small"
                href="https://space.bilibili.com/406275313"
              >
                <v-icon>{{ siBilibili.path }}</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                icon
                size="small"
                href="https://github.com/Teahouse-Studios"
              >
                <v-icon>{{ mdiGithub }}</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                icon
                size="small"
                href="https://afdian.net/@teahouse"
              >
                <v-icon>{{ mdiLightningBolt }}</v-icon>
              </v-btn>
            </div>
            <div class="mb-1">
              <span class="text-sm mr-3 block md:inline">产品</span>
              <v-btn variant="text" href="https://meme.teahouse.team/">
                梗体中文
              </v-btn>
              <v-btn variant="text" href="https://bot.teahouse.team/">
                小可
              </v-btn>
            </div>
            <div class="mb-1">
              <span class="text-sm mr-3 block md:inline">法律</span>
              <v-btn variant="text" to="/terms/" :prepend-icon="mdiScript"
                >服务条款</v-btn
              ><v-btn variant="text" to="/privacy/" :prepend-icon="mdiLock"
                >隐私政策</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col
          md="6"
          cols="12"
          class="text-center md:text-right pt-5 flex flex-column items-center md:items-end justify-end"
        >
          <div>
            <router-link to="/" title="首页">
              <nuxt-img
                src="/logo.svg"
                alt="Teahouse Studios"
                height="48"
                class="mx-auto md:ml-auto md:mr-0 h-[48px]"
                style="filter: invert(1)"
              />
            </router-link>
            <div class="text-body-2 copyright">
              <p>
                <a
                  class="text-white text-decoration-none"
                  href="https://beian.miit.gov.cn/"
                >
                  蜀 ICP 备 2022011374 号-1
                </a>
              </p>
              <p>
                &copy; {{ new Date().getFullYear() }} 成都问谛居科技有限公司
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script lang="ts" setup>
import {
  mdiScript,
  mdiLock,
  mdiWeb,
  mdiEmail,
  mdiGithub,
  mdiLightningBolt,
  mdiNewspaperVariantOutline,
} from '@mdi/js'
import si from 'simple-icons'
const { siBilibili } = si
</script>
<style>
.copyright p {
  line-height: 24px;
}

.link-list > div {
  width: fit-content;
}
</style>
