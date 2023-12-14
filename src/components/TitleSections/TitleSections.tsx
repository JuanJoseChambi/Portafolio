
interface TitleProp {
    title:string;
    position?:string;
    margin?:string
}

function TitleSections({title, position, margin}:TitleProp) {

    let positionText;
    switch (position) {
        case "center":
            positionText = "justify-center"
            break;
        case "start":
        positionText = "justify-start"
        break;

        case "end":
        positionText = "justify-end"
        break;

        default:
            break;
    }
    let marginSpace;
    switch (margin) {
        case "top":
            marginSpace = "mt-20"
            break;
        case "right":
            marginSpace = "mr-20"
            break;
        case "bottom":
            marginSpace = "mb-32"
            break;
        case "left":
            marginSpace = "ml-20"
            break;
        default:
            break;
    }



  return (
    <article className={`relative flex ${positionText} items-end ${marginSpace} bg-purpl-500`}>
          <h2 className="text-[65px] sm:text-8xl text-start bg-greenn-500 text-[#adadad8c] select-none">{title}</h2>
          <h2 className="absolute text-5xl text-neutral-800 font-bold tracking-widest drop-shadow-[10px_5px_5px_#262626]">{title}</h2>
       </article>
  )
}

export default TitleSections