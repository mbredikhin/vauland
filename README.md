# vauland

This is implementation of [vaul-vue](https://github.com/unovue/vaul-vue) drawer component, including all the necessary Reka UI components in the bundle.

## Installation

```bash
pnpm add vauland
```

```bash
npm install vauland
```

```bash
yarn add vauland
```

## Usage

```vue
<script setup lang="ts">
import {
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from 'vauland';
</script>

<template>
  <DrawerRoot>
    <DrawerTrigger> Open </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContent>
        <p>Content</p>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
```

## Credits

All credits go to these open-source works and resources

- Major credits go to [Emil Kowalski](https://emilkowal.ski/) for the original [Vaul library](https://github.com/emilkowalski/vaul).
- [Reka UI](https://www.reka-ui.com/) for the Dialog primitive used under the hood.
- All the contributors of the [Vaul Vue](https://github.com/unovue/vaul-vue/) library.
