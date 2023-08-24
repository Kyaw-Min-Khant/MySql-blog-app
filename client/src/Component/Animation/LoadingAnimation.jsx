import Lottie from "lottie-react";
import Animation from "../../Json/animation2.json";
const LoadingAnimation = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Lottie className="h-[200px] lg:h-[300px]" animationData={Animation} />
    </div>
  );
};

export default LoadingAnimation;
