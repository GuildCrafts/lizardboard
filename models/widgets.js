const mongoose = require('mongoose')
const { Schema } = mongoose

const WidgetDescriptorSchema = new Schema({
  category: { type: String, required: true },
  source: { type: String, required: true },
  type: { type: String, required: true }, // GithubPullRequest
  title: { type: String, required: true },
  size: { type: String, required: true, default: '1x1' },
  fields: [ ]
})

const WidgetDescriptor = mongoose.model(
  'WidgetDescriptor', WidgetDescriptorSchema
)




// {
//   type: 'GithubPullRequest',
//   title: 'Github Pull Requests',
//   fields: [ { title: 'Github ID', key: 'githubId', type: 'Text' } ]
// }

// const newWidget = new WidgetDescriptor({ request.body })


WidgetDescriptor.create({
  category: 'Dashboard Tools',
  source: 'Geckoboard',
  type: 'Clock',
  title: 'Clock',
  size: '1x1',
  fields: [
    Field.create({ title: 'Format', key: 'format', type: 'Dropdown', defaultValue: '12 hour', options: [ '12 hour', '24 hour' ] }),
    Field.create({
      title: 'Location',
      key: 'location',
      type: 'Dropdown',
      options: [ 'All', 'the', 'countries' ],
      fields: [
        Field.create({ title: 'Timezone', key: 'timezone', type: 'Dropdown', options: [ 'all', 'timezones' ]})
      ]
    })
  ]
})

WidgetDescriptor.create({
  type: 'QR',
  title: 'QR Code',
  fields: [ Field.create({ title: 'url', key: 'url', type: 'Text' }) ]
})

WidgetDescriptor.create({
  type: 'Text',
  title: 'Text',
  fields: [
    Field.create({ title: 'Message one', key: 'messageOne', type: 'Text'})
    Field.create({ title: 'Message one type', key: 'messageOneType', type: 'Dropdown', defaultValue: 'Text', options: [ 'Text', 'Alert', 'Info' ]})
    Field.create({ title: 'Message two', key: 'messageTwo', type: 'Text'})
    Field.create({ title: 'Message two type', key: 'messageTwoType', type: 'Dropdown', defaultValue: 'Text', options: [ 'Text', 'Alert', 'Info' ]})
    Field.create({ title: 'Message three', key: 'messageThree', type: 'Text'})
    Field.create({ title: 'Message three type', key: 'messageThreeType', type: 'Dropdown', defaultValue: 'Text', options: [ 'Text', 'Alert', 'Info' ]})
    Field.create({ title: 'Message four', key: 'messageFour', type: 'Text'})
    Field.create({ title: 'Message four type', key: 'messageFourType', type: 'Dropdown', defaultValue: 'Text', options: [ 'Text', 'Alert', 'Info' ]})
  ]
})
