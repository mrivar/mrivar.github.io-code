<template>
  <CvBlock title="publications" :items="publications" />
</template>

<script setup lang="ts">
const publications = [
  {
    years: '2019',
    position: 'Bayesian 3D ConvNets for Action Recognition from Few Examples',
    institution: 'ICCV 2019',
    institutionWeb:
      'https://openaccess.thecvf.com/content_ICCVW_2019/html/MDALC/de_la_Riva_Bayesian_3D_ConvNets_for_Action_Recognition_from_Few_Examples_ICCVW_2019_paper.html',
    description:
      'After finishing my M.Sc., my thesis supervisor and I wrote a scientific\n' +
      'paper based on my thesis, which we published and presented in ICCV 2019\n' +
      '(International Conference on Computer Vision) in October 2019:<br>\n' +
      'Implementation of a regularization technique that uses Bayesian methods in\n' +
      '3D ConvNets to combat overfitting, learning more from less videos in Action\n' +
      'Recognition challenges.'
  }
]
</script>

<style scoped lang="scss"></style>
