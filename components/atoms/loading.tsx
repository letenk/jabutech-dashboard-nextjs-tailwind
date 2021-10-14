export default function Loading() {
  return (
    <svg
      className="inline-block w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect
        x="17.5"
        y={30}
        width={15}
        height={40}
        fill="#facd9e"
        style={{
          animationPlayState: "running",
          animationDelay: "0s",
        }}
      >
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="18;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="64;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
      </rect>
      <rect
        x="42.5"
        y={30}
        width={15}
        height={40}
        fill="#389798"
        style={{
          animationPlayState: "running",
          animationDelay: "0s",
        }}
      >
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
      </rect>
      <rect
        x="67.5"
        y={30}
        width={15}
        height={40}
        fill="#459448"
        style={{
          animationPlayState: "running",
          animationDelay: "0s",
        }}
      >
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          style={{
            animationPlayState: "running",
            animationDelay: "0s",
          }}
        />
      </rect>
    </svg>
  );
}
