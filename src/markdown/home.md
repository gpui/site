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

## Docs

|                                                                                                  |                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [README](https://github.com/zed-industries/zed/blob/main/crates/gpui/README.md)                  | Intro to GPUI (GPUI's README)                                                        |
| [gpui.rs](https://github.com/zed-industries/zed/blob/main/crates/gpui/src/gpui.rs)               | Core functionality and API of GPUI (GPUI's crate root)                               |
| [Examples](/examples)                                                                            | Practical GPUI patterns, from Rust UI fundamentals to CSS-inspired layouts and more. |
| [Contexts](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/contexts.md)         | Explanation of different contexts in GPUI                                            |
| [Key Dispatch](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/key_dispatch.md) | Details on key event dispatching in GPUI                                             |

---

More docs & examples can be found throughout [Zed's crates](https://github.com/zed-industries/zed/tree/main/crates), and in Zed's [UI crate](https://github.com/zed-industries/zed/tree/main/crates/ui/src).
