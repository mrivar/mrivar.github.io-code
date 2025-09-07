<template>
  <div class="flex gap-4">
    <div class="flex flex-col gap-3">
      <Label htmlFor="date-picker" class="px-1">
        Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker"
            class="w-32 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
          setDate(date)
          setOpen(false)
          }}
          />
        </PopoverContent>
      </Popover>
    </div>
    <div class="flex flex-col gap-3">
      <Label htmlFor="time-picker" class="px-1">
        Time
      </Label>
      <Input
        type="time"
        id="time-picker"
        step="1"
        defaultValue="10:30:00"
        class="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss"></style>
