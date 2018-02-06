import React from 'react'
import DefaultLayout from 'components/common/DefaultLayout'
import Jumbotron from 'components/home/Jumbotron'
import ProjectListSection from 'components/home/ProjectListSection'
import MemberListSection from 'components/home/MemberListSection'

export default () => (
  <DefaultLayout>
    <Jumbotron />
    <ProjectListSection />
    <MemberListSection />
  </DefaultLayout>
)
