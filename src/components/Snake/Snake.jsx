import useStore from "../../utils/store";
import s from "./Snake.module.scss";

const Snake = ({ data }) => {
  const { skin } = useStore();

  // console.log(data);

  const getStyle = (dot, i) => {
    let backgroundColor = 'green'; 
  
    if (data[data.length - 1] === dot) {
      backgroundColor = 'green'; 
    }
  
    const style = {
      transform: `translate(${dot[0]}px, ${dot[1]}px)`,
      backgroundColor: backgroundColor, 
      width: '10px', 
      height: '10px', 
      borderRadius: '30px', 
    };
  
    return style;
  };
  
  return (
    <>
      {data.map((dot, i) => (
        <div key={i} className={s.snakeDot} style={getStyle(dot, i)}></div>
      ))}
    </>
  );
};

export default Snake;
