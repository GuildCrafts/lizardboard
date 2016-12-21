const insertWidgetSpecification = data => {
  return new Promise( ( resolve, reject ) => {
      WidgetSpecification.collection.insert( data, ( error, item ) => {
        if( error === null ) {
          resolve( item )
        } else {
          reject( error )
        }
      })
  })
}

module.exports = insertWidgetSpecification
