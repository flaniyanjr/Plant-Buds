import PlantLibrary from "./PlantLibrary";

function Content() {

    // plant library items
    const [allPlantItems, setAllPlantItems] = useState([])

    // fetch plant library data
    useEffect(() => {
        fetch("http://localhost:5555/plants")
            .then((resp) => resp.json())
            .then((allPlantItems) => setAllPlantItems(allPlantItems))
    }, []);
    
    return (
        <div>
            <PlantLibrary allPlantItems={allPlantItems} />
        </div>
    )
}

export default Content;