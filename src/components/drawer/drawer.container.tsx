import { Container, ContainerProps } from '../common/container';

type DrawerContainerProps = ContainerProps;

export function DrawerContainer(props: DrawerContainerProps) {
  return <Container {...props}>{props.children}</Container>;
}
