var myApplication = {
  controller: function() {
    var textPresent = m.prop(true)
    return {
      textPresent: textPresent,
      removeText: function() {
        textPresent(false)
      },
      ontextchange: function(e) {
        console.log('app textchange handler. target=', e.target, 'value=', e.target.value)
      }
    }
  },
  view: function(ctrl) {
    return m('div', [
      m('div', [
        ctrl.textPresent() ?
          m.component(TextInput,
              {ontextchange: ctrl.ontextchange}) : null,
        m('button', {onclick: ctrl.removeText}, 'Remove input')
      ]),
      m.component(TextArea, {cols: 40, rows: 10, ontextchange: ctrl.ontextchange})
    ])
  }
}

m.mount(document.getElementById('root'), myApplication)
