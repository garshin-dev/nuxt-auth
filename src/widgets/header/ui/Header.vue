<template>
  <header class="text-blt ue flex items-center justify-between px-4 py-2 shadow-md">
    <nav>
      <ul class="flex items-center gap-2">
        <li v-for="el in navLinks" :key="el">
          <NuxtLink :to="el.link" class="bold uppercase">
            {{ $t(el.name) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <ul class="flex items-center gap-2">
        <li>
          <button>
            {{ $t('sign_in') }}
          </button>
        </li>
        <li>
          <button>
            {{ $t('sign_up') }}
          </button>
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex flex-col gap-1">
        <li v-for="locale in locales" :key="locale">
          <button @click="setLocale(locale.code)">
            {{ locale.name }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n()

const navLinks = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'personal',
    link: '/personal',
  },
]
</script>
