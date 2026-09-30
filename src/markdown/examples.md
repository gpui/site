# GPUI basics

GPUI is a Rust UI framework that draws its own interface with the GPU, rather than embedding a browser or using platform-native widgets.
It uses Metal on macOS, DirectX 11 on Windows, and wgpu on Linux; X11 or Wayland handles Linux windowing.

## Views and state

A GPUI app opens a window and gives it a root view.
A view is a Rust struct managed by GPUI that implements `Render`; its `render` method builds the UI as a tree of elements.
If you know React, or React-like UI frameworks, the view-and-state model may feel familiar.

In the example below, the view displays its count and increments it when clicked:

```rust
impl Render for Counter {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .child(format!("Count: {}", self.count))
            .child(
                div()
                    .on_click(cx.listener(|this, _, _, cx| {
                        this.count += 1;
                        cx.notify();
                    }))
                    .child("Add"),
            )
    }
}
```

The handler mutates the view's state, then calls `cx.notify()` to request a new render; changing a field alone does not do that.
Visit the full [counter and testing example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/testing.rs) to see the complete app, including keyboard interactions and tests.

## Layout and styling

If you're familiar with Tailwind, GPUI's styling API will feel close to home.
The syntax is Rust method calls that look similar to how you'd compose CSS utility-classes on HTML elements.

For example, these express a centered column with a gap:

```rust
div()
    .flex()
    .flex_col()
    .gap_3()
    .justify_center()
    .items_center()
```

Equivalent to:

```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
```

The method names are analogous, but the available properties and behavior are defined by GPUI.
There isn't total CSS compatibility yet; GPUI implements the features needed primarily to build either Zed or Delta, plus others driven by the community.
However, there are enough supported CSS-like features to unlock styling a real-world application like you would on the web.

For example, GPUI provides grid layout:

```rust
div()
    .grid()
    .grid_cols(5)
    .child(header.col_span_full())
    .child(sidebar.col_span(1))
    .child(content.col_span(3))
```

This [grid layout example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/grid_layout.rs) uses a five-column grid for a wide layout and switches to a stacked flex layout when its container becomes narrow.
That switch is written with GPUI's `container_query`, which is naturally inspired by the CSS counterpart.

## Events and application logic

Mouse handlers run Rust code directly, and keyboard shortcuts use GPUI actions.
There is no browser-to-Rust RPC boundary: a handler can call your application's Rust code.

A keyboard shortcut uses an action, a handler on the view, and a key binding in app setup:

```rust
actions!(counter, [Increment]);

struct Counter {
    count: i32,
}

impl Counter {
    fn increment(&mut self, _: &Increment, _: &mut Window, cx: &mut Context<Self>) {
        self.count += 1;
        cx.notify();
    }
}

impl Render for Counter {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .key_context("Counter")
            .on_action(cx.listener(Self::increment))
    }
}

fn bind_keys(cx: &mut App) {
    cx.bind_keys([KeyBinding::new("up", Increment, Some("Counter"))]);
}
```

`key_context` scopes where the binding applies.
See the [key dispatch guide](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/key_dispatch.md) for more details.
Keep slow work, such as disk or network I/O, off the UI thread.

## Accessibility

Similar to the web, you are responsible for making custom controls accessible in GPUI.
GPUI uses AccessKit to expose an accessibility tree; see the [accessibility guide](https://github.com/zed-industries/zed/blob/main/crates/gpui/src/_accessibility.rs).

## Try it out

GPUI gives you the UI framework, not the rest of your app architecture.
It does not provide a browser DOM or automatically turn its controls into native platform widgets.

Try building a project dashboard.
This gives you a chance to practice displaying projects in a scrollable list, filtering them with a text field, and opening or revealing details for each row.
It brings together input, state, event handling, and list rendering without requiring a large application.

For runnable starting points, see [hello world](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/hello_world.rs), [input](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/input.rs), and the full [GPUI examples directory](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples).
