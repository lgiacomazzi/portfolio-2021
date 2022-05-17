export default function Icon({ icon, size = 24, color = "black" }) {
    return (
        <img src={`/svg/${icon}.svg`} width={size} height={size} />
    )
}