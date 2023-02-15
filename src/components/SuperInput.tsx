import React, {ChangeEvent} from "react";

type SuperInputPropsType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}

export const SuperInput = (props:SuperInputPropsType) => {
const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setNewTitle(e.currentTarget.value)
}
   return (
       <div>
           <input
               value={props.newTitle}
               onChange={onChangeInputHandler}
           />
       </div>
   )
}