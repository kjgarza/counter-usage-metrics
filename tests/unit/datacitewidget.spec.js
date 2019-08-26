import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DataCiteWidget from '@/components/DataCiteWidget.vue'

describe('DataCiteWidget.vue', () => {
  it('renders props.msg when passed', () => {
    const doi = '10.7272/q6g15xs4'
    const wrapper = shallowMount(DataCiteWidget, {
      propsData: { doi }
    })

    // eslint-disable-next-line
    console.log(wrapper.html());

    expect(wrapper.find('p').text()).to.include("Views")
  })



  it('renders different doi data', () => {
  })

  it('renders input data', () => {
  })
})
