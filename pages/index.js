import React from 'react'
import DefaultLayout from 'components/common/DefaultLayout'
import Jumbotron from 'components/home/Jumbotron'
import ProjectListSection from 'components/home/ProjectListSection'
import CorporateSection from 'components/home/CorporateSection'
import ContactSection from 'components/home/ContactSection'

export default () => (
  <DefaultLayout>
    <Jumbotron />
    <ProjectListSection />
    <CorporateSection />
    <ContactSection />
  </DefaultLayout>
)
