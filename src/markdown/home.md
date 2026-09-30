## Hello, World 🌎

```rust
use gpui::{
    div, prelude::*, px, rgb, size, App, Application, Bounds, Context, SharedString, Window,
    WindowBounds, WindowOptions,
};

struct HelloWorld {
    text: SharedString,
}

impl Render for HelloWorld {
    fn render(&mut self, _window: &mut Window, _cx: &mut Context<Self>) -> impl IntoElement {
        div()
            .flex()
            .flex_col()
            .gap_3()
            .bg(rgb(0x505050))
            .size(px(500.0))
            .justify_center()
            .items_center()
            .shadow_lg()
            .border_1()
            .border_color(rgb(0x0000ff))
            .text_xl()
            .text_color(rgb(0xffffff))
            .child(format!("Hello, {}!", &self.text))
            .child(
                div()
                    .flex()
                    .gap_2()
                    .child(div().size_8().bg(gpui::red()))
                    .child(div().size_8().bg(gpui::green()))
                    .child(div().size_8().bg(gpui::blue()))
                    .child(div().size_8().bg(gpui::yellow()))
                    .child(div().size_8().bg(gpui::black()))
                    .child(div().size_8().bg(gpui::white())),
            )
    }
}

fn main() {
    Application::new().run(|cx: &mut App| {
        let bounds = Bounds::centered(None, size(px(500.), px(500.0)), cx);
        cx.open_window(
            WindowOptions {
                window_bounds: Some(WindowBounds::Windowed(bounds)),
                ..Default::default()
            },
            |_, cx| {
                cx.new(|_| HelloWorld {
                    text: "World".into(),
                })
            },
        )
        .unwrap();
    });
}
```

Today, it's Zed's UI framework. Tomorrow, it's yours!

## Docs

|                                                                                                  |                                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [gpui – README](https://github.com/zed-industries/zed/blob/main/crates/gpui/README.md)           | Intro to gpui (gpui's README)                          |
| [gpui – gpui.rs](https://github.com/zed-industries/zed/blob/main/crates/gpui/src/gpui.rs)        | Core functionality and API of gpui (gpui's crate root) |
| [Contexts](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/contexts.md)         | Explanation of different contexts in gpui              |
| [Key Dispatch](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/key_dispatch.md) | Details on key event dispatching in gpui               |

Further docs & examples can be found throughout [Zed's crates](https://github.com/zed-industries/zed/tree/main/crates), and in Zed's [ui crate](https://github.com/zed-industries/zed/tree/main/crates/ui/src).

## Examples

Explore practical GPUI patterns, from Rust UI fundamentals to CSS-inspired
layout and small desktop utilities, on the [examples page](/examples).
