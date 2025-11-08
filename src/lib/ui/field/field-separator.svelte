<script lang="ts">
	import { Separator } from "@/lib/ui/separator/index.js";
	import { cn, type WithElementRef } from "@/lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		children?: Snippet;
	} = $props();

	const hasContent = $derived(!!children);
</script>

<div
	bind:this={ref}
	data-slot="field-separator"
	data-content={hasContent}
	class={cn(
		"relative -my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm",
		className
	)}
	{...restProps}
>
	<Separator class="top-1/2 absolute inset-0" />
	{#if children}
		<span
			class="block relative bg-background mx-auto px-2 w-fit text-muted-foreground"
			data-slot="field-separator-content"
		>
			{@render children()}
		</span>
	{/if}
</div>
