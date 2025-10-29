export default function RandomFive(arr) {
        return [...arr].sort(() => 0.5 - Math.random()).slice(0, 5);
}