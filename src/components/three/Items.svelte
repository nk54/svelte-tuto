<script lang="ts">
  import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/lib/ui/table";
</script>

<Table>
  <TableCaption>List of Items</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead>Description</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>Description for Item 1</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Item 2</TableCell>
      <TableCell>Description for Item 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
