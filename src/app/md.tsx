"use client";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const MarkdownContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    className={clsx(
      "prose prose-invert",
      "max-w-4xl",
      "prose-p:text-stone-100",
      "prose-em:text-stone-100",
      "prose-li:text-stone-100",
      "prose-h2:text-lg",
      "prose-pre:p-2 prose-pre:-mx-2 prose-pre:backdrop-blur-xl prose-pre:bg-white/10 prose-pre:shadow-inner prose-pre:shadow-black/5 prose-pre:border prose-pre:border-white/10",
      "prose-a:underline prose-a:underline-offset-4 prose-a:decoration-from-font",
    )}
  >
    {children}
  </div>
);

export const Markdown = ({ children }: { children: string }) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                language="rust"
                style={dark}
                useInlineStyles={false}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};
