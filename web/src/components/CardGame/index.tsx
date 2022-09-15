interface Props {
    imageUrl: string;
    name: string;
    ads: string;
}

function CardGame({imageUrl, name, ads}: Props) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden ">
            <img src={imageUrl} alt={name} />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="text-bold text-white block">
                    {name}
                </strong>
                <span className="text-zinc-300 text-sm block mt-1">
                    {ads} anúncio(s)
                </span>
            </div>
        </a>
    );
}

export default CardGame;
