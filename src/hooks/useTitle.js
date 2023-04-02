import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(()=>{
    document.title = `${title} | shopping Cart`;

  },[title])

  return null;
}
