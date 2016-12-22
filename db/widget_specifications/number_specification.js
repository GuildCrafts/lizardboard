const number = {
  "category": "Dashboard Tools",
  "group": "Number",
  "type": "Number",
  "title": "Number",
  "description": "Display a statistic, goal, completion percentage and progress bar from a csv file.",
  "image": "http://placehold.it/140x100?text=Number",
  "sections": [{
    "type": "Setup",
    "fields": [
      {
        "name": "Title",
        "type": "text",
        "defaultValue": "Number"
      },
      {
        "name": "Size",
        "type": "dropdown",
        "defaultValue": "1x1",
        "options": [
          { "label": "1x1", "value": "1x1" },
          { "label": "2x2", "value": "2x2" },
          { "label": "3x3", "value": "3x3" }
        ]
      },
      {
        "name": "CSV URL",
        "type": "text",
        "help": "Enter the CSV url to set the values of this field.",
        "defaultValue": ""
      },
      {
        "name": "Column",
        "type": "text",
        "help": "This value provides the column for your statistic.",
        "defaultValue": ""
      },
      {
        "name": "Row",
        "type": "text",
        "help": "This value provides the row for your statistic.",
        "defaultValue": ""
      },
      {
        "name": "Goal (optional)",
        "type": "text",
        "help": "Entering a goal will override any other secondary stat.",
        "defaultValue": ""
      }
    ]
  }]
}

module.exports = number
