import { Container } from '../common/container';
import { BoardToolbar } from './toolbar';

export function BoardContainer() {
  return (
    <Container className="min-h-full w-full">
      <BoardToolbar></BoardToolbar>
    </Container>
  );
}
