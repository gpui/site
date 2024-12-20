## Hello, World 🌎

```rust
use gpui::{div, prelude::*, rgb, App, AppContext, SharedString, ViewContext, WindowOptions};

struct HelloWorld {
    text: SharedString,
}

impl Render for HelloWorld {
    fn render(&mut self, _cx: &mut ViewContext<Self>) -> impl IntoElement {
        div()
            .flex()
            .bg(rgb(0x2e7d32))
            .size_full()
            .justify_center()
            .items_center()
            .text_xl()
            .text_color(rgb(0xffffff))
            .child(format!("Hello, {}!", &self.text))
    }
}

fn main() {
    App::new().run(|cx: &mut AppContext| {
        cx.open_window(WindowOptions::default(), |cx| {
            cx.new_view(|_cx| HelloWorld {
                text: "World".into(),
            })
        })
        .unwrap();
    });
}

```

Today, it's Zed's UI framework. Tomorrow, it's yours!

We'd love your help making that happen.

## Docs

|                                                                                                  |                                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [gpui – README](https://github.com/zed-industries/zed/blob/main/crates/gpui/README.md)           | Intro to gpui (gpui's README)                          |
| [gpui – gpui.rs](https://github.com/zed-industries/zed/blob/main/crates/gpui/src/gpui.rs)        | Core functionality and API of gpui (gpui's crate root) |
| [Contexts](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/contexts.md)         | Explanation of different contexts in gpui              |
| [Key Dispatch](https://github.com/zed-industries/zed/blob/main/crates/gpui/docs/key_dispatch.md) | Details on key event dispatching in gpui               |

Further docs & examples can be found throughout [Zed's crates](https://github.com/zed-industries/zed/tree/main/crates), and in Zed's [ui crate](https://github.com/zed-industries/zed/tree/main/crates/ui/src).

## Examples

|                                                                                                                  |                                                 |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [Hello World](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/hello_world.rs)               | The basic "Hello, World!" example               |
| [Animation](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/animation.rs)                   | Rotating SVG animation                          |
| [GIF Viewer](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/gif_viewer.rs)                 | GIF image in a window                           |
| [Image](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/image/image.rs)                     | Loading and displaying images                   |
| [Input](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/input.rs)                           | Basic text input field                          |
| [Opacity](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/opacity.rs)                       | Changing opacity with animations                |
| [Set Menus](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/set_menus.rs)                   | Application menus creation and usage            |
| [Shadow](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/shadow.rs)                         | Element with shadow                             |
| [SVG](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/svg/svg.rs)                           | SVG images with different colors                |
| [Text Wrapper](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/text_wrapper.rs)             | Text wrapping techniques                        |
| [Uniform List](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/uniform_list.rs)             | Optimized scrollable list using uniform heights |
| [Window Positioning](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/window_positioning.rs) | Window positioning techniques                   |
| [Window Shadow](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/window_shadow.rs)           | Custom window shadows and resizing              |
| [Window](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/window.rs)                         | Window types and operations                     |
