<script lang="ts">
	import { cn } from "@/lib/utils.js";
	import { Textarea } from "@/lib/ui/textarea/index.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...props
	}: ComponentProps<typeof Textarea> = $props();
</script>

<Textarea
	bind:ref
	data-slot="input-group-control"
	class={cn(
		"flex-1 bg-transparent dark:bg-transparent shadow-none py-3 border-0 rounded-none focus-visible:ring-0 resize-none",
		className
	)}
	bind:value
	{...props}
/>
