<template>
  <div class="content-container">
    <CvBlock title="Blog" :items="posts" />
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    years: '04/2021',
    position: 'How to Structure Your Angular Apps',
    institution: 'Medium',
    institutionWeb:
      'https://martinriva.medium.com/how-to-structure-your-angular-app-9f76717740a7',
    description:
      'We need an app architecture that allows it to be:<br>' +
      'Consistent, Reusable, Optimized and Testable.'
  },
  {
    years: '03/2021',
    position: 'Word Embeddings: CBOW vs Skip-Gram',
    institution: 'Baeldung',
    institutionWeb: 'https://www.baeldung.com/cs/word-embeddings-cbow-vs-skip-gram',
    description:
      'In Natural Language Processing, we want computers to understand the text as we humans do.'
  },
  {
    years: '01/2021',
    position: 'Interpretation of Loss and Accuracy for a Machine Learning Model',
    institution: 'Baeldung',
    institutionWeb: 'https://www.baeldung.com/cs/ml-loss-accuracy',
    description:
      'When using Machine Learning, we have different metrics that show us to know how well our model is doing. However, these measures can confuse what they mean.'
  },
  {
    years: '10/2020',
    position: 'Batch Normalization in Convolutional Neural Networks',
    institution: 'Baeldung',
    institutionWeb: 'https://www.baeldung.com/cs/batch-normalization-cnn',
    description:
      'Training Deep Neural Networks is a difficult task that involves several problems to tackle.'
  },
  {
    years: '09/2020',
    position: 'Understanding Forecast Accuracy: MAPE, WAPE, WMAPE',
    institution: 'Baeldung',
    institutionWeb: 'https://www.baeldung.com/cs/mape-vs-wape-vs-wmape',
    description:
      'In the era we live in, it is really important to learn how to use data properly and take advantage of it.'
  },
  {
    years: '08/2020',
    position: 'Top-N Accuracy Metrics',
    institution: 'Baeldung',
    institutionWeb: 'https://www.baeldung.com/cs/top-n-accuracy-metrics',
    description:
      'In machine learning, we often find ourselves measuring the accuracy of our models, but, are we doing it correctly?'
  }
]
</script>

<style scoped lang="scss"></style>
