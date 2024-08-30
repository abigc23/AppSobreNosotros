import {Stack} from "expo-router"
const StackLayaout = ()=>{
    return(
        <Stack screenOptions={{title:"Nosotros"}}>
            <Stack.Screen name="(tabs)" options={{headerStyle: {backgroundColor: "#266B88"}}}/>
        </Stack>
    )
}
export default StackLayaout