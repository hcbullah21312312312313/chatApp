export default function Avatar(props) {
  if(props.userId !== undefined){
  const Colors = [
    "bg-blue-200",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-orange-100",
  ];
  const index=parseInt(props.userId,16)
  const indexRevised=index %3
  return (
    <div className={Colors[indexRevised]+" border-sm p-2 ml-2 w-12 h-12 rounded-full  flex items-center"} >
      <span className="text-center w-full"> {props.username[0]}</span>
    </div>
  );
}else{
  return null
}
}
