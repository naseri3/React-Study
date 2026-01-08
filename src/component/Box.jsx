const Box = (props) => {
  return (
    <div className="box">
      BlackPink {props.num}
      <div>{props.name}</div>
    </div>
  )
}

export default Box
