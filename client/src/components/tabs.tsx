import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Tab() {
  const [merchantID, setMerchantID] = useState("");
  const [pinCodes, setPinCodes] = useState("");
  const [pin, setPins] = useState('');
  const [merch, setMerch] = useState([]);
  const [warn, setWarn] = useState('');
  const [addSatatus, setAddStatus] = useState('');

  const handleAddMerchant = async(e:any) => {
    e.preventDefault();
    setAddStatus('');
    const pinCodesArray = pinCodes.split(",").map((code) => code.trim());
    console.log("Merchant ID:", merchantID);
    console.log("Pin Codes:", pinCodesArray);
  
    const response = await fetch('http://localhost:5050/addMerchant',{
      method:'POST',
      body: JSON.stringify({
        merchantId:merchantID,
        deliveryPin:pinCodesArray
      }),
      headers:{ 'Content-type':'application/json' }
    })
    const json = await response.json();
    console.log(json)
    if(json.error)
      setWarn(json.error)
    else
      setAddStatus('Merchant added successfully');
  };

  const getMerch = async (e: any) => {
    e.preventDefault();
    setMerch([]);
    const respose = await fetch('http://localhost:5050/merchantAvail', {
      method: 'POST',
      body: JSON.stringify({
        pincode: pin
      }),
      headers: { 'Content-type': 'application/json' }
    })
    const json = await respose.json();
    if (json.error)
      setWarn(json.error)
    else
      setMerch(json);
  }

  return (
    <Tabs defaultValue="check" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="check">Check PinCode</TabsTrigger>
        <TabsTrigger value="add">Add Merchant</TabsTrigger>
      </TabsList>
      <TabsContent value="check">
        <Card>
          <CardHeader>
            <CardTitle>Check PinCode</CardTitle>
            <CardDescription>
              Enter the PinCode to check the Merchants Available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="pinCode">PinCode</Label>
              <Input id="pinCode" placeholder="580009" type="number" onChange={(e) => setPins(e.target.value)} />
            </div>

            <Button type="submit" onClick={(e) => getMerch(e)}>Check PinCodes</Button>
            <div className="w-full p-0 md:px-10">
              {merch.length !== 0 ? (
                <div>
                  <div className="text-slate-500 text-sm">Discover Merchants Near You!</div>
                  <div className="w-full aspect-square bg-slate-500/30 rounded border-2 border-dashed border-slate-100 p-3">
                    {merch.join(', ')}
                  </div>
                </div>
              ) : (
                <div className="text-red-500 text-sm">
                  {warn}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="add">
        <Card>
          <CardHeader>
            <CardTitle>Add Merchant</CardTitle>
            <CardDescription>
              Add a Merchant by adding their MerchantID and PinCodes they
              deliver to.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="merchantID">Merchant ID (e.g. M78)</Label>
              <Input
                id="merchantID"
                type="text"
                value={merchantID}
                onChange={(e) => setMerchantID(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pinCodes">Pin Codes (comma-separated)</Label>
              <Input
                id="pinCodes"
                type="text"
                placeholder="560001,560002...."
                value={pinCodes}
                onChange={(e) => setPinCodes(e.target.value)}
              />
            </div>
            {
              addSatatus.length !== 0 ? (
                <div className="text-green-500 text-sm">{addSatatus}</div>
              )
              :(
                <div className="text-red-500 text-sm">{warn}</div>
              )
            }
          </CardContent>
          <CardFooter>
            <Button type ="submit" onClick={(e)=>handleAddMerchant(e)}>Add Merchant</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
