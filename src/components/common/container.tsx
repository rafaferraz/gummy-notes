import { forwardRef } from 'react';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  )
);
Container.displayName = 'Container';
