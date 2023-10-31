export const home = `## Why GPUI?

- Reason #1: **It's fast.**
- Reason #2: **It's easy to use.**
- Reason #3: **It's open source.**

Some code or something:

~~~rust
fn initialize(&self, cx: &mut WindowContext) -> AnyBox {
    cx.with_element_id(self.entity_id(), |_global_id, cx| {
        self.update(cx, |state, cx| {
            let mut any_element = Box::new(AnyElement::new(state.render(cx)));
            any_element.initialize(state, cx);
            any_element
        })
    })
}
~~~

## A quick example

Create beautiful user interfaces in Rust faster than ever.

~~~rust
fn render(self, _view: &mut V, cx: &mut ViewContext<V>) -> impl Component<V> {
    let theme = theme(cx);

    div()
        .w_96()
        .bg("#EFEFEF")
        .border()
        .border_color("#CCCCCC")
        .shadow_2xl()
        .child(
            h_stack()
                .justify_between()
                .p_1()
                .border_b()
                .border_color(theme.border)
                .child(div().children(self.title.clone().map(|t| Label::new(t))))
                .child(IconButton::new("close", Icon::Close)),
        )
        .child(v_stack().p_1().children(self.children))
}
~~~

For those familiar with Tailwind CSS, the syntax of laying out elements should already be pretty comfortable.

See [Layout in GPUI ->](/) for more.

## Contributing to GPUI

GPUI is an open source project, while we welcome contributions, it is currently tied to [Zed](/) so contributions will need to be made there and kept in sync with it.`;
