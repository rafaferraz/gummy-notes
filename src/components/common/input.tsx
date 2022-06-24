export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  className,
  id,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  placeholder,
  readOnly = false,
  value,
  onDoubleClick,
  onClick,
  defaultValue,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      required={required}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      readOnly={readOnly}
      id={id}
      onChange={onChange}
      {...props}
    />
  );
}
