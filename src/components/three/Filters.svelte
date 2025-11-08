<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";
</script>

<Select type="single">
  <SelectTrigger>
    <span>Select a filter</span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="grayscale">Grayscale</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
