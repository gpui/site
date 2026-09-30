# GPUI examples

Small, focused examples are a good way to learn GPUI's building blocks. These
guides connect common UI patterns to current examples in the Zed repository.
The code excerpts are intentionally small; follow the source links for complete,
runnable applications.

## Start here

### A reactive counter

A GPUI view stores state in a Rust struct. An event handler changes that state
and calls `notify` so GPUI knows to render the view again.

```rust
fn increment(&mut self, _: &ClickEvent, _: &mut Window, cx: &mut Context<Self>) {
    self.count += 1;
    cx.notify();
}
```

This is a useful first exercise: add a decrement action, prevent the count from
going below zero, then add keyboard actions. GPUI's
[testing example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/testing.rs)
shows a fuller counter with actions, focus, and rendering.

## Layout and styling

### GPUI patterns alongside CSS

GPUI's styling API will feel familiar if you know CSS and utility-class systems:
you compose layout and visual properties on elements. The syntax is Rust method
calls, though—not CSS declarations or a browser DOM.

For example, these express a centered column with a gap:

```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
```

```rust
div()
    .flex()
    .flex_col()
    .gap_3()
    .justify_center()
    .items_center()
```

The method names are analogous, but the available properties and behavior are
defined by GPUI. This is not full CSS compatibility: GPUI has its own APIs,
rendering model, and supported layout features. For example, it provides grid
layout through methods such as `grid`, `grid_cols`, and `col_span`:

```rust
div()
    .grid()
    .grid_cols(5)
    .child(header.col_span_full())
    .child(sidebar.col_span(1))
    .child(content.col_span(3))
```

The [grid layout example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/grid_layout.rs)
uses a five-column grid for a wide layout and switches to a stacked flex layout
when its container becomes narrow. That switch is written with GPUI's
`container_query`; don't assume browser CSS features or syntax transfer
one-to-one.

### A searchable project dashboard

A project dashboard is a practical next step after the counter: display projects
in a scrollable list, let a text field filter the rows, and make each row open
or reveal project details. It brings together input, state, event handling, and
list rendering without requiring a large application.

Start with GPUI's
[input example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/input.rs)
and
[uniform list example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/uniform_list.rs).
For large datasets, prefer the uniform list pattern rather than rendering every
row at once.

## Desktop app patterns

### A file-organizer utility

Build a small interface for rules such as “move screenshots with this prefix
into this folder.” Keep file inspection and moving in ordinary Rust application
logic; use GPUI to edit rules, show progress, and report errors. This illustrates
one of GPUI's strengths for desktop tools: UI events can call Rust code in the
same application, without requiring a browser-to-backend RPC layer.

Treat file operations as real application work: show failures to the user and
avoid doing slow disk scans on the UI thread. The GPUI examples repository has
building blocks for
[input](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/input.rs),
[lists](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/uniform_list.rs),
and
[notifications](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/system_notifications.rs).

### A command palette or settings window

A command palette or compact settings window is a good example of using GPUI
for one focused piece of a desktop app. It can combine keyboard focus,
searchable commands, and settings controls without requiring the example to
grow into a full application.

Explore GPUI's
[focus and keyboard examples](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples)
and
[window examples](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples/window.rs)
when building this pattern. GPUI draws its own interface; it does not
automatically become the platform's native controls.

### Animate a changing value

GPUI can redraw a view as state changes. In this excerpt, a click starts an
opacity change and requests another animation frame until the value reaches its
target:

```rust
if self.animating {
    self.opacity += 0.005;
    if self.opacity >= 1.0 {
        self.animating = false;
        self.opacity = 1.0;
    } else {
        window.request_animation_frame();
    }
}
```

See the complete
[opacity example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/opacity.rs)
and
[animation example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/animation.rs)
for the surrounding state and rendering code.

## Accessibility and testing

### Expose accessible information

GPUI integrates with AccessKit to expose an accessibility tree. A custom
interactive element should communicate its role, name, and value, and support
the relevant accessible actions—not just respond to pointer clicks.

The
[accessibility example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/a11y.rs)
implements a counter with a spin-button role, an accessible label and numeric
value, and increment/decrement actions. The
[GPUI accessibility guide](https://github.com/zed-industries/zed/blob/main/crates/gpui/src/_accessibility.rs)
explains the underlying API.

### Test behavior through the app

Use GPUI's test support to exercise interactions and state changes, instead of
only checking how a screen looks. The
[testing example](https://github.com/zed-industries/zed/blob/main/crates/gpui/examples/testing.rs)
includes a counter and test setup to use as a starting point.

## More examples

The [GPUI examples directory](https://github.com/zed-industries/zed/tree/main/crates/gpui/examples)
has runnable examples covering input, animation, accessibility, lists, windows,
images, and more. The API is evolving, so check the current source when adapting
an example.
