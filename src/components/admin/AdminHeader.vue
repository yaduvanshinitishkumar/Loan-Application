<template>
  <div class="q-py-sm row header fixed-top q-pt-lg">
    <!-- Left Branding -->
    <div class="col q-pl-xl"></div>
    <!-- Center Branding -->
    <div class="col-7 text-center text-bold"></div>
    <!-- Right Action -->
    <div class="col flex justify-end q-pr-md">
      <q-avatar style="height: 25px;width: 25px">
        <img :src="require('../../assets/admin/Logo.svg')" />
      </q-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader"
};
</script>

<style scoped>

</style>