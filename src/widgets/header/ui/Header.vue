<template>
	<header class="bg-black text-blue">
		<nav>
			<ul>
				<li
					v-for="link in links"
					:key="link"
				>
					{{ link.name }}
				</li>
			</ul>
		</nav>
		<div>
			<ul>
				<li>
					<button>
						Sign in
					</button>
				</li>
				<li>
					<button>
						Sign up
					</button>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup lang="ts">
const links = [
	{
		name: 'home',
		link: '/'
	},
	{
		name: 'personal',
		link: '/personal'
	}
]
</script>