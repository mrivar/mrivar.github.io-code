<template>
  <CvBlock title="experience" :items="experience" />
</template>

<script setup lang="ts">
const experience = [
  {
    years: "2022 — now",
    yearSum: "3 years",
    position: "Back End Developer",
    institution: "Devo",
    institutionWeb: "https://www.devo.com/",
    description: "Currently developing Devo’s big data product (a massive distributed DB), " +
      "using <b>Kotlin</b>, RabbitMQ, Akka, Pekko, MySQL, Microservices, etc.",
  },
  {
    years: "2019 — 2022",
    yearSum: "3 years",
    position: "Full Stack Developer & Squad Lead",
    institution: "Taiger",
    //institutionWeb: "https://www.taiger.com/",
    institutionWeb: "https://www.linkedin.com/company/taiger/",
    description: "Managed the CV Team of TAIGER’s AI SDK product, allowing users to create ML models to extract text & data." +
      "<ul>" +
      "<li><b>Python</b>, MySQL, Docker, Kubernetes, RabbitMQ, Microservices</li>" +
      "<li><b>Angular</b>, Jasmine, GraphQL</li>" +
      "</ul>",
  },
  {
    years: "03 — 08/2019",
    yearSum: "6 months",
    position: "Artificial Intelligence Researcher",
    institution: "LINKS",
    institutionWeb: "https://linksfoundation.com/en/",
    description: "Research Institute with a main focus on handling emergencies projects. " +
      "Conducted research on Computer Vision and Natural Language Processing methods, " +
      "in the field of Deep Learning. ",
  },
  {
    years: "2016 — 2018",
    yearSum: "2 years",
    position: "Full Stack Developer",
    institution: "United Academics",
    institutionWeb: "https://www.ua-magazine.com/",
    description: "Developed their Open Access Library using <b>Python</b> (Django framework), <b>React</b>, and MongoDB.",
  },
  {
    years: "01 — 06/2016",
    yearSum: "6 months",
    position: "Front End Developer Intern",
    institution: "Sugerendo",
    institutionWeb: "https://www.sugerendo.com/",
    description: "E-commerce consultancy specialized in Magento.",
  },
]
</script>

<style scoped lang="scss"></style>
