const { Widget } = require( '../../../../models/widgets' )

const addWidget = widgetData => dashboard => {
  dashboard.widgets.push( new Widget( widgetData ))
  return dashboard.save()
}

module.exports = addWidget
