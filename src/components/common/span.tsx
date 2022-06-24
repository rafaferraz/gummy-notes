export type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export function Span(props: SpanProps) {
  return <span {...props}>{props.children}</span>;
}
