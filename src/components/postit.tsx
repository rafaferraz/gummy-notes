import Draggable from 'react-draggable';
import { useState } from 'react';

export default function PostIt({ color = '#FBF5C5' }: { color: string }) {
  const [showTools, setShowTools] = useState(false);
  const [disabledTextArea, setDisabledTextArea] = useState(true);
  let actualColor = 'notes-yellow';
  let actualDarkColor = 'notes-dark-yellow';

  switch (color) {
    case '#DBBEF9': // purple
      actualColor = 'notes-purple';
      actualDarkColor = 'notes-dark-purple';
      break;
    case '#AFDEFA': // blue
      actualColor = 'notes-blue';
      actualDarkColor = 'notes-dark-blue';
      break;
    case '#BDF6E3': // green
      actualColor = 'notes-green';
      actualDarkColor = 'notes-dark-green';
      break;
    case '#FBF5C5': // yellow
      actualColor = 'notes-yellow';
      actualDarkColor = 'notes-dark-yellow';
      break;
    case '#FFCB9E': // orange
      actualColor = 'notes-orange';
      actualDarkColor = 'notes-dark-orange';
      break;
    default:
      actualColor = 'notes-yellow';
      actualDarkColor = 'notes-dark-yellow';
      break;
  }

  return (
    <Draggable bounds="parent">
      <div className={`w-0`} role={'button'} tabIndex={0} onClick={() => setShowTools(true)}>
        {showTools ? (
          <div
            className={`absolute top-[-45px] left-24 w-32 h-9 rounded-lg flex flex-row items-center justify-evenly bg-gm-light-pink dark:bg-gm-purple`}>
            <span
              className={`cursor-pointer material-icons text-3xl text-gm-darkest-pink dark:text-black`}>
              delete
            </span>
            <span
              className={`cursor-pointer material-icons text-3xl text-gm-darkest-pink dark:text-black`}>
              palette
            </span>
            <span
              className={`cursor-pointer material-icons text-3xl text-gm-darkest-pink dark:text-black`}
              role={'button'}
              tabIndex={0}
              onClick={() => setDisabledTextArea(false)}
              onBlur={() => setShowTools(false)}>
              edit
            </span>
            {/* <span
              className={`cursor-pointer ml-2 material-icons text-3xl text-gm-darkest-pink dark:text-black`}
              role={'button'}
              tabIndex={0}
              onClick={() => setShowTools(false)}>
              close
            </span> */}
          </div>
        ) : null}
        <div
          className={`active:border-2 active:border-gm-pink active:rounded-br-[35px] absolute top-1/2 left-1/2 drop-shadow-xl flex flex-row justify-end items-end`}>
          <div className={`flex flex-col items-center`}>
            <span className={`w-56 h-56 rounded-br-[35px] bg-${actualColor}`}></span>
            <textarea
              className={`absolute cursor-pointer m-2 p-2 bg-transparent text-lg font-bold resize-none focus:outline-dashed focus:outline-gm-pink`}
              name={'note'}
              rows={6}
              cols={18}
              maxLength={100}
              autoSave={'true'}
              disabled={disabledTextArea}
              placeholder={'Adicionar nota'}></textarea>
          </div>
          <span
            className={`w-[35px] h-[35px] rounded-br-[35px] absolute bg-${actualDarkColor}`}></span>
        </div>
      </div>
    </Draggable>
  );
}
