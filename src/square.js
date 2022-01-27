function square(props) {
    return (
        <>
            <rect x={props.x} y={props.y} width="1" height="1" fill={props.color}></rect>
        </>
    )
  }

export default square;