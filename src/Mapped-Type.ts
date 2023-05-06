type Volume ={
    height:number,
    width:number
    depth:string
}


type Area<T> ={
  readonly  [index in keyof T] : T[index]
}

const area : Area<{height:number, width:number, depth:string}> = {
    height:10,
    width:12,
    depth:"string"
}

// area.height =40