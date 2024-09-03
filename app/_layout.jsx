import {Stack} from "expo-router"
const StackLayaout = ()=>{
    return(
        <Stack screenOptions={{title:"Nosotros"}}>
            <Stack.Screen name="(tabs)" options={{headerStyle: {backgroundColor: "#e9e9e9"}}}/>
        </Stack>
    )
}
export default StackLayaout