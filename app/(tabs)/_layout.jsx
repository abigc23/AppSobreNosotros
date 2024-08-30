import { Tabs } from "expo-router"

const TabsLayout = ()=>{
    return(
        <Tabs screenOptions={({route})=>({headerStyle: {backgroundColor:"#266B88"},headerShown:false,tabBarActiveTintColor:"#000000",tabBarIcon: ({focused,color,size})=>{
            let iconName
            if(route.name =="Inicio"){
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }
        }})} >
            <Tabs.Screen name="Inicio"/>
        </Tabs>
    )
}
export default TabsLayout