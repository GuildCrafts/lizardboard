const { Widget } = require( '../../../../models/widgets' )

const addWidget = dashboard => {
  dashboard.widgets.push( new Widget( widgetData ))
  return dashboard.save()
}

module.exports = addWidget
