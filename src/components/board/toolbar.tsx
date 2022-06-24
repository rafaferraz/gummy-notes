import { Button } from '../common/button';
import { Container } from '../common/container';
import { Span } from '../common/span';

export function BoardToolbar() {
  return (
    <Container className="relative h-full w-full">
      <Container className="absolute inset-x-0 bottom-0 mx-auto h-max mb-10 p-2 z-30 bg-gm-light-pink dark:bg-gm-purple rounded-lg w-max">
        <Container className="flex flex-row justify-between items-center gap-12">
          <Button className={`flex flex-col hover:-translate-y-0.5`}>
            <Span className="material-icons-round text-6xl text-gm-darkest-pink dark:text-black">
              palette
            </Span>
          </Button>
          <Button className={`flex flex-col hover:-translate-y-0.5 cursor-grab`}>
            <Container
              className={`w-[3.25rem] h-[3.25rem] bg-notes-dark-yellow rounded-br-[20px] drop-shadow-2xl`}></Container>
          </Button>
          <Button className={`flex flex-col hover:-translate-y-0.5`}>
            <Span className="material-icons-round text-6xl text-gm-darkest-pink dark:text-black">
              mood
            </Span>
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
