
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your raffle platform settings</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4 h-auto">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        {/* General Settings */}
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Information</CardTitle>
              <CardDescription>
                Update your platform's basic information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platformName">Platform Name</Label>
                <Input id="platformName" defaultValue="RafflePro" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input id="supportEmail" type="email" defaultValue="support@rafflepro.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input id="contactPhone" defaultValue="+1 (555) 123-4567" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Raffle Defaults</CardTitle>
              <CardDescription>
                Configure default settings for new raffles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultTicketPrice">Default Ticket Price ($)</Label>
                <Input id="defaultTicketPrice" type="number" defaultValue="5" min="1" step="0.01" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="defaultTickets">Default Number of Tickets</Label>
                <Input id="defaultTickets" type="number" defaultValue="100" min="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drawMethod">Draw Method</Label>
                <Select defaultValue="random">
                  <SelectTrigger id="drawMethod">
                    <SelectValue placeholder="Select draw method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="random">Random Selection</SelectItem>
                    <SelectItem value="sequential">Sequential Drawing</SelectItem>
                    <SelectItem value="live">Live Drawing Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Notification Settings */}
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Configure the email notifications sent to users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="purchaseConfirmation">Purchase Confirmation</Label>
                  <p className="text-sm text-muted-foreground">
                    Send an email when a user purchases raffle tickets
                  </p>
                </div>
                <Switch id="purchaseConfirmation" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="drawReminder">Draw Reminder</Label>
                  <p className="text-sm text-muted-foreground">
                    Send a reminder email 24 hours before a raffle draw
                  </p>
                </div>
                <Switch id="drawReminder" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="winnerNotification">Winner Notification</Label>
                  <p className="text-sm text-muted-foreground">
                    Notify winners via email when they win a prize
                  </p>
                </div>
                <Switch id="winnerNotification" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingEmails">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Send promotional emails about new raffles and special offers
                  </p>
                </div>
                <Switch id="marketingEmails" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Payment Settings */}
        <TabsContent value="payment" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Configure the payment methods accepted on your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="creditCards">Credit Cards</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept payments via credit cards
                  </p>
                </div>
                <Switch id="creditCards" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="paypal">PayPal</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept payments via PayPal
                  </p>
                </div>
                <Switch id="paypal" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="bankTransfer">Bank Transfer</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept payments via bank transfer
                  </p>
                </div>
                <Switch id="bankTransfer" />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="cryptoCurrency">Cryptocurrency</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept payments via cryptocurrency
                  </p>
                </div>
                <Switch id="cryptoCurrency" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Currency Settings</CardTitle>
              <CardDescription>
                Configure currency and payment processing settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultCurrency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="defaultCurrency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="cad">CAD ($)</SelectItem>
                    <SelectItem value="aud">AUD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="processingFee">Processing Fee (%)</Label>
                <Input id="processingFee" type="number" defaultValue="2.9" min="0" step="0.1" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Advanced Settings */}
        <TabsContent value="advanced" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security and access settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require two-factor authentication for admin access
                  </p>
                </div>
                <Switch id="twoFactorAuth" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ipRestriction">IP Restriction</Label>
                  <p className="text-sm text-muted-foreground">
                    Restrict admin access to specific IP addresses
                  </p>
                </div>
                <Switch id="ipRestriction" />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Input id="sessionTimeout" type="number" defaultValue="30" min="5" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-raffle-purple hover:bg-raffle-purple/90">Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>
                These actions are destructive and cannot be undone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clearData">Clear Platform Data</Label>
                <p className="text-sm text-muted-foreground">
                  This will remove all raffles, users, and transaction history
                </p>
                <Button variant="destructive" size="sm" className="mt-2">
                  Clear All Data
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="resetSettings">Reset to Default Settings</Label>
                <p className="text-sm text-muted-foreground">
                  This will reset all settings to their default values
                </p>
                <Button variant="destructive" size="sm" className="mt-2">
                  Reset Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
