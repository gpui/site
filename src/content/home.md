## Hello, World 🌎

```rust
use gpui::{}

struct HelloWorld {
    text: String,
}

impl Render for HelloWorld {
    type Element = Div;

    fn render(&mut self) -> Self::Element {
        div()
        .flex()
        .size_full()
        .justify_center()
        .items_center()
        .text_color(hsla(1.0, 1.0, 1.0, 1.0))
        .child(self.text)
    }
}
```

## A quick example

Create beautiful user interfaces in Rust faster than ever.

```rust
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
```

For those familiar with Tailwind CSS, the syntax of laying out elements should already be pretty comfortable.

See [Layout in GPUI ->](/) for more.
