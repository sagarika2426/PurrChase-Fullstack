import { Button} from "@mui/material";


function MyButton({children, bgcolor, fontcolor}) {
  return <>
  <Button variant="contained" sx={{backgroundColor: bgcolor || "red", color: fontcolor || "black"}}>{children}</Button>
  </>;
}
export default MyButton;
