var app = {
  vm: {
    title: m.prop('title'),
    description: m.prop('description')
  },
  controller: function() {
    var textPresent = m.prop(true)
    return {
      textPresent: textPresent,
      removeText: function() {
        textPresent(false)
      }
    }
  },
  view: function(ctrl) {
    return m('div', [
      m('div', [
        ctrl.textPresent() ?
          m.component(TextInput, {
            ontextchange: m.withAttr('value', app.vm.title),
            value: app.vm.title()
          }) : null,
        m('button', {onclick: ctrl.removeText}, 'Remove title input')
      ]),
      m.component(TextArea, {
        cols: 40, rows: 10,
        ontextchange: m.withAttr('value', app.vm.description),
        value: app.vm.description()
      })
    ])
  }
}

m.mount(document.getElementById('root'), app)
