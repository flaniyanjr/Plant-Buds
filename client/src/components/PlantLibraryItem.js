function PlantLibraryItem({id, name, image, nickname, water, extraInfo, size, ownerName, location}) {
    
    return (
        <div className="plant-lib-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default PlantLibraryItem;

