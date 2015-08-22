var TextInput, TextArea

(function() {
  var factory = function(tag) {
    return {
      controller: function(args) {
        var oldValue,
            element,
            composing,
            setComposing = function() { composing = true },
            resetComposing = function() { composing = false },
            onInput = function(e) {
              if (!composing && e.target.value !== oldValue) {
                if (args && args.ontextchange) {
                  args.ontextchange({
                    currentTarget: element,
                    target: element
                  })
                }
                oldValue = e.target.value
              }
            }
        return {
          config: function(elem, isInitialized, context) {
            if (!isInitialized) {
              element = elem
              oldValue = element.value
              element.addEventListener('compositionstart', setComposing)
              element.addEventListener('compositionend', resetComposing)
              element.addEventListener('input', onInput)
              context.onunload = function() {
                element.removeEventListener('compositionstart', setComposing)
                element.removeEventListener('compositionend', resetComposing)
                element.removeEventListener('input', onInput)
              }
            }
          }
        }
      },
      view: function(ctrl, args) {
        var myargs = {}
        for (key in args) myargs[key] = args[key]
        myargs.config = ctrl.config
        return m(tag, myargs)
      }
    }
  }
  TextInput = factory('input')
  TextArea = factory('textarea')
})()
