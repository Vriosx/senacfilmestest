interface TitleProps{
    children: string
}

export function Title(props : TitleProps){
    const text = props.children

    return(
        <h2 className="font-semibold border-l-4 pl-1 m-4 border-yellow-500">
           { text }
        </h2>
    )

}