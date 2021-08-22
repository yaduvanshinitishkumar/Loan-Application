<template>
  <div class="flex flex-center">
    <div class="flex flex-center" style="max-width: 400px">
      <p class="text-h4 text-center text-weight-bold q-mt-xl text-primary">
        Your application was successful.
        <span class="text-positive">Thank you!</span>
      </p>
      <span class="text-caption">Check your profile to see your application status.</span>
      <div class="flex justify-between q-mt-xl">
        <RoundedButton
          label="Back to home"
          style="border-radius: 30px;"
          :on-click="$router.push({name:'LoanCalculator'})"
          left-icon="fa fa-arrow-left"
          flat
          color="black"
        />
        <RoundedButton
          label="My Profile"
          style="border-radius: 30px;"
          :on-click="() => {}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";

export default {
  name: "RegistrationSuccessful",
  components: { RoundedButton }
};
</script>

<style scoped>

</style>