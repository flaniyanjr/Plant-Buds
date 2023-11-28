function Content() {

    // plant library items
    const [allPlantItems, setAllPlantItems] = useState([])

    // fetch plant library data
    useEffect(() => {
        fetch("http://localhost:5555/plants")
            .then((resp) => resp.json())
            .then((allPlantItems) => setAllPlantItems(allPlantItems))
    }, []);
    
    return 
}

export default Content;