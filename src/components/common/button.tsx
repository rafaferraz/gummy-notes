export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}
