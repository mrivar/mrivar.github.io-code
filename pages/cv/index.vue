<template>
  <div class="cv-container">
    <div class="me">
      <img src="@/public/me.jpg"  alt="me"/>
      <div class="name-container">
        <p class="name">
          <span class="semi-bold">Martín de la Riva</span>
        </p>
        <p class="sub">
          Full Stack Developer
        </p>
        <p class="city">
          Barcelona, Spain
        </p>
      </div>
    </div>
    <CvBlock title="about me">
      I’m a Developer with a Master’s in Artificial Intelligence, with 9+ years of experience in building
      scalable backend systems and ML solutions. Passionate about clean code, distributed
      systems, and meaningful tech.<br><br>
      What I value in a job opportunity is <b class="b">how interesting the project/s is</b> (technologically and/or
      socially), a <b class="b">good working environment</b> (knowledge sharing, teamwork) and a <b class="b">modern company culture</b>
      (remote work, flexible hours, personal development, etc.).
    </CvBlock>
    <CvBlock title="experience" :items="experience" />
    <CvBlock title="education" :items="education"/>
  </div>
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
    tags: ["kotlin"],
  },
  {
    years: "2019 — 2022",
    yearSum: "3 years",
    position: "Full Stack Developer & Squad Lead",
    institution: "Taiger",
    //institutionWeb: "https://www.taiger.com/",
    institutionWeb: "https://www.linkedin.com/company/taiger/",
    description: "Managed the CV Team of TAIGER’s AI SDK product, allowing users to create ML models to extract text & data.<br>" +
      "<ul>" +
      "<li><b>Python</b>, MySQL, Docker, Kubernetes, RabbitMQ, Microservices</li>" +
      "<li><b>Angular</b>, Jasmine, GraphQL</li>" +
      "</ul>",
    tags: ["python", "angular"],
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
    tags: ["python", "react"],
  },
  {
    years: "2016 — 2018",
    yearSum: "2 years",
    position: "Full Stack Developer",
    institution: "United Academics",
    institutionWeb: "https://www.ua-magazine.com/",
    description: "Developed their Open Access Library using <b>Python</b> (Django framework), <b>React</b>, and MongoDB.",
    tags: ["python", "django", "react"],
  },
  {
    years: "01 — 06/2016",
    yearSum: "6 months",
    position: "Front End Developer Intern",
    institution: "Sugerendo",
    institutionWeb: "https://www.sugerendo.com/",
    description: "E-commerce consultancy specialized in Magento.",
    tags: ["html", "css", "javascript"],
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

<style scoped lang="scss">
.cv-container {
  justify-self: center;
  margin-top: 50px;
  max-width: 650px;
  font-size: $text-m;
}
@include phone {
  .cv-container {
    margin-top: 0;
  }
}
.me {
  margin-bottom: 40px;
  display: flex;
  img {
    width: 120px;
    border-radius: 50%;
  }
  & .name-container {
    text-align: left;
    & p.name {
      font-size: $text-xl;
    }
  }
}
</style>
