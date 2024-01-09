import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";
import { ThemeProvider } from "@/theme";
import ApplicationNavigator from "./navigators/Application";
import "./translations";
const queryClient = new QueryClient();
export const storage = new MMKV();
import { AppProvider, UserProvider, RealmProvider } from "@realm/react";
import { LoginComponent } from "./components/Login";
import { HistoricalAsymetricSchema } from "./components/Historical";
function App() {
  return (
    <AppProvider id={"ringdev-pnywy"}>
      <UserProvider fallback={LoginComponent}>
        <RealmProvider
          schema={[HistoricalAsymetricSchema]}
          sync={{
            flexible: true,
            // Add initial subscriptions to sync a preferred
            // subset of data to the device
            initialSubscriptions: {
              update: (mutableSubs, realm) => {
                mutableSubs.add(realm.objects(HistoricalAsymetricSchema));
              },
            },
            onError: (session, error) => {
              // Replace this with a preferred logger in production.
              console.error(error.message);
            },
          }}
        >
          <QueryClientProvider client={queryClient}>
            <ThemeProvider storage={storage}>
              <ApplicationNavigator />
            </ThemeProvider>
          </QueryClientProvider>
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
export default App;
