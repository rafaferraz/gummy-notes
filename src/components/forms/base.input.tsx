import { useState } from 'react';

function BaseFormInput({
  type = 'text',
  className = '',
  onChange,
  value = '',
  obscure = false,
  obscureIconStyle = '',
  preffixIcon = <></>,
  suffixIcon = <></>,
  validators = [(value: string): string | null => ''],
  label,
  placeholder,
  ...props
}: {
  type?: string;
  className?: string;
  onChange: (e: any) => void;
  value?: string;
  obscure?: boolean;
  obscureIconStyle?: string;
  preffixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  validators?: ((value: string) => string | null)[];
  label?: string;
  placeholder?: string;
}) {
  const [error, setError] = useState('');
  const [isObscure, setIsObscure] = useState(obscure);

  function onLostFocus() {
    const error = validators.reduce((acc, validator) => {
      const error = validator(value);
      if (error) {
        return error;
      }
      return acc;
    }, '');
    setError(error);
  }

  return (
    <div className={'flex flex-col justify-center items-stretch min-w-full ' + className}>
      {label && (
        <label className="text-eco-purple-accent text-left pl-4 text-xs font-semibold" htmlFor="">
          {label}
        </label>
      )}
      <div className="flex flex-row justify-start cursor-text items-center outline-none rounded-lg py-1 px-2 text-white border-solid border border-eco-purple-accent bg-eco-grey-accent/[.12] hover:bg-eco-grey-accent/[.24]">
        {preffixIcon}
        <input
          className={`grow outline-none ${preffixIcon ? 'pl-1' : 'pl-3'} ${
            suffixIcon ? 'pr-1' : 'pr-3'
          } bg-transparent placeholder:font-['Nunito'] placeholder:text-sm`}
          value={value}
          onChange={onChange}
          type={isObscure ? 'password' : type}
          onBlur={onLostFocus}
          placeholder={placeholder}
        />
        {suffixIcon}
        {obscure && (
          <span
            tabIndex={0}
            role={'button'}
            onClick={() => {
              setIsObscure(!isObscure);
            }}
            className={obscureIconStyle}>
            {isObscure ? 'visibility_off' : 'visibility'}
          </span>
        )}
      </div>
      {error && <span className="text-eco-red text-left mt-2 text-xs pl-4">{error}</span>}
    </div>
  );
}

export default BaseFormInput;
