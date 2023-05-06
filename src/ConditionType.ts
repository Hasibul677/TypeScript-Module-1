type Bandhubi = "A" | "B" | "C";

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, "C">



type Sheikh ={
    wife1:string,
    wife2:string
}

type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWfie = CheckProperty<Sheikh, "wife2">