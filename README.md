mithril.text-with-ontextchange
==============================

This library contains two components `TextInput` and `TextArea`.
These components have the `ontextchange` attribute, which is similar to `oninput` but different.

* `textchange` events are not dispatched between `compositionstart` and `compositionend` events.
* `textchange` events are not dispatched when the text does not change.

## Example

https://hnakamur.github.io/mithril.input-with-ontextchange/example/

## License

MIT
