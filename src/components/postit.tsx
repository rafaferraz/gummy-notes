import Draggable from 'react-draggable';

export default function PostIt() {
  return (
    <Draggable bounds="parent">
      <div
        className={`active:border-2 active:border-gm-pink active:rounded-br-[35px] absolute top-1/2 left-1/2 drop-shadow-xl flex flex-row justify-end items-end`}>
        <div className={`flex flex-col items-center`}>
          <span className={`w-56 h-56 rounded-br-[35px] bg-notes-yellow`}></span>
          <textarea
            className={`absolute m-2 p-1 bg-transparent text-lg font-bold resize-none focus:outline-dashed focus:outline-gm-pink`}
            name={'note'}
            rows={6}
            cols={20}
            maxLength={100}
            autoSave={'true'}
            placeholder={'Adicionar nota'}></textarea>
        </div>
        <span
          className={`w-[35px] h-[35px] rounded-br-[35px] absolute bg-notes-dark-yellow`}></span>
      </div>
    </Draggable>
  );
}
