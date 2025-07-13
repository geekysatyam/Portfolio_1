import { OrbitingCircles } from "./OrbitingCircles";

// Main Component
export function Frameworks() {
  const skills = [
    "esp32",
    "esp8266",
    "arduino",
    "python",
    "opencv",
    "django",
    "html5",
    "css3",
    "javascript",
    "matplotlib",
    "pandas",
    "blynk",
    "iot",
    "ml",
    "yolo",
    "px4",
    "ardupilot",
    "qgroundcontrol",
    "ros"
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Reverse Orbit */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// Reusable Icon Component with Tooltip
const Icon = ({ src }) => {
  const name = src.split("/").pop().replace(".svg", "").toUpperCase();
  return (
    <img
      src={src}
      alt={name}
      title={name}
      className="duration-200 rounded-sm hover:scale-110 w-10 h-10"
    />
  );
};
