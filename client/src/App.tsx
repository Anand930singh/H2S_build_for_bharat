import Navbar from "./components/navbar";
import Tab from "./components/tabs";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ThemeProvider } from "@/components/theme-provider";
import TableData from "./components/TableData";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Drawer>
        <div className="w-screen flex p-4 pt-28 items-center justify-center h-full min-h-screen bg-[url('https://cdn.wallpapersafari.com/20/80/jQPMT3.jpg')] bg-cover bg-center">
          <Navbar />
          <Tab />

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>

              <TableData />
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </div>
      </Drawer>
    </ThemeProvider>
  );
}
