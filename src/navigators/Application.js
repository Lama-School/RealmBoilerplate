import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Example, Startup } from "@/screens";
import { useTheme } from "@/theme";
import { LoginComponent } from "@/components/Login";
import { HistoricalAsymetricSchema } from "@/components/Historical";
const Stack = createStackNavigator();
import {
  AppProvider,
  UserProvider,
  RealmProvider,
  useAuth,
} from "@realm/react";
import Realm from "realm";

Realm.setLogLevel("debug");

Realm.setLogger((level, message) => {
  if (level) {
    console.log(message);
  }
});

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  return (
    // <AppProvider id={"ringdev-pnywy"}>
    //   <UserProvider fallback={LoginComponent}>
    //     <RealmProvider
    //       schema={[HistoricalAsymetricSchema]}
    //       sync={{
    //         flexible: true,
    //         // Add initial subscriptions to sync a preferred
    //         // subset of data to the device
    //         initialSubscriptions: {
    //           update: (mutableSubs, realm) => {
    //             mutableSubs.add(realm.objects(HistoricalAsymetricSchema));
    //           },
    //         },
    //         onError: (session, error) => {
    //           // Replace this with a preferred logger in production.
    //           console.error(error.message);
    //         },
    //       }}
    //     >
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
    //     </RealmProvider>
    //   </UserProvider>
    // </AppProvider>
  );
}
export default ApplicationNavigator;
