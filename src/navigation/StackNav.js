import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screen/HomePage";
import Auth from "../screen/Auth";

const Stack = createStackNavigator()


export const StackNav = () =>  {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  }