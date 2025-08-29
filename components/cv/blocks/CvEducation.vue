<template>
  <CvBlock title="education" :items="education"/>
</template>

<script setup lang="ts">
const education = [
  {
    years: "2016 — 2019",
    position: "M.Sc. Artificial Intelligence",
    institution: "University of Amsterdam",
    institutionWeb: "https://www.uva.nl/shared-content/programmas/en/masters/artificial-intelligence/artificial-intelligence.html",
    description: "Thesis: Bayesian 3D Convolutional Neural Networks with Variational Inference",
  },
  {
    years: "2012 — 2016",
    position: "BSc. Computer Science and Engineering",
    institution: "Universidad Carlos III de Madrid",
    institutionWeb: "https://www.uc3m.es/ss/Satellite/Grado/en/Detalle/Estudio_C/1371212562160/1371212987094/Bachelor_s_Degree_in_Computer_Science_and_Engineering",
    description: "Specialization in Computation and Artificial Intelligence.<br>" +
      "Erasmus in Vienna (TU Wien) and Warsaw (Politechnika Waszawska).<br>" +
      "Thesis: E-commerce website embedded to a Data Visualization app - Tableau.",
  },
]
</script>

<style scoped lang="scss"></style>
