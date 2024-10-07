<script setup lang="ts">
const experience = [
  {
    years: "2022 — now",
    yearSum: "2 years",
    position: "Back End Developer",
    institution: "Devo",
    institutionWeb: "https://www.devo.com/",
    description: "Currently working in Devo using Kotlin",
  },
  {
    years: "2019 — 2022",
    yearSum: "3 years",
    position: "Full Stack Developer & Squad Lead",
    institution: "Taiger",
    institutionWeb: "https://www.taiger.com/",
    description: "Worked in TAIGER’s main poduct, IDP.\n" +
      "• Angular, Jasmine, GraphQL\n" +
      "• Python, MySQL, Docker, Kubernetes, RabbitMQ, Microservices",
  },
  {
    years: "03 — 08/2019",
    yearSum: "6 months",
    position: "Artificial Intelligence Researcher",
    institution: "LINKS",
    institutionWeb: "https://linksfoundation.com/en/",
    description: "Research Institute. Worked on research projects on Computer Vision and Natural Language Processing, using Deep Learning techniques.",
  },
  {
    years: "2016 — 2018",
    yearSum: "2 years",
    position: "Full Stack Developer",
    institution: "United Academics",
    institutionWeb: "https://www.ua-foundation.org/",
    description: "Development using React, Django and MongoDB.",
  },
  {
    years: "01 — 08/2016",
    yearSum: "8 months",
    position: "Front End Developer Intern",
    institution: "Sugerendo",
    institutionWeb: "https://www.sugerendo.com/",
    description: "E-commerce consultancy specialized in Magento.",
  },
]

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
    description: "Specialization in Computation and Artificial Intelligence.\n" +
      "Erasmus in Vienna (TU Wien) and Warsaw (Politechnika Waszawska).\n" +
      "Thesis: E-commerce website embedded to a Data Visualization app - Tableau.",
  },
]
</script>

<template>
  <div class="cv-container">
    <CvBlock title="about me">
      I’m a Developer with a Master’s in Artificial Intelligence. With around 8 years of experience
      in both frontend and backend, I love developing apps and learning new technologies.<br><br>
      What I value in a job opportunity is <b>how interesting the project/s is</b> (technologically and/or
      socially), a <b>good working environment</b> (knowledge sharing, teamwork) and a <b>modern company culture</b>
      (remote work, flexible hours...).
    </CvBlock>
    <CvBlock title="experience" :items="experience" />
    <CvBlock title="education" :items="education"/>
  </div>
</template>

<style scoped lang="scss">
.cv-container {
  justify-self: center;
  max-width: 500px;
}
</style>
