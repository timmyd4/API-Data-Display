import RandomFive from "./RandomFive";
export default function handleNewFive({data, setDisplayed}) {
    setDisplayed(RandomFive(data));
}