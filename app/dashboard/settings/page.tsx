"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Eye, EyeOff, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function SettingsPage() {
    const [apiKey, setApiKey] = useState("");
    const [showKey, setShowKey] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Mock Webhook URL - in prod this comes from DB
    const webhookUrl = "https://dash.asamblor.com/api/webhooks/instantly/728ed52f-uuid-v4";

    const handleSave = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Instantly API Key saved successfully.");
        }, 1500);
    };

    const copyWebhook = () => {
        navigator.clipboard.writeText(webhookUrl);
        toast.success("Webhook URL copied to clipboard");
    };

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground">Manage your integrations and account preferences.</p>
            </div>
            <Separator />

            {/* Instantly Integration Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        Instantly.ai Integration
                        <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            Active
                        </span>
                    </CardTitle>
                    <CardDescription>
                        Connect your Instantly account to auto-import leads into the CRM.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="api-key">Instantly API Key</Label>
                        <div className="relative">
                            <Input
                                id="api-key"
                                type={showKey ? "text" : "password"}
                                placeholder="Enter your Instantly API Key"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                className="pr-10"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowKey(!showKey)}
                            >
                                {showKey ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                            </Button>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                            Found in Instantly Settings {'>'} Integrations {'>'} API Key
                        </p>
                    </div>

                    <div className="space-y-2 pt-4">
                        <Label>Receiving Webhook</Label>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 px-3 py-2 rounded-md border bg-muted/50 font-mono text-xs text-muted-foreground truncate">
                                {webhookUrl}
                            </div>
                            <Button variant="outline" size="icon" onClick={copyWebhook}>
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                            Paste this URL into Instantly {'>'} Campaign {'>'} Webhooks {'>'} On Lead Reply
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-4">
                    <Button onClick={handleSave} disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save Changes
                    </Button>
                </CardFooter>
            </Card>

            {/* Infrastructure Status */}
            <Card className="border-amber-500/20 bg-amber-500/5">
                <CardHeader>
                    <CardTitle className="text-amber-500 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        Infrastructure Status
                    </CardTitle>
                    <CardDescription>
                        Core Infrastructure for CRM is currently: <span className="text-amber-500 font-bold uppercase">System in construction</span>
                    </CardDescription>
                </CardHeader>
            </Card>

            {/* Team Settings */}
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>
                        Manage who has access to this dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground py-6 text-center border-2 border-dashed rounded-lg bg-muted/20">
                        <p className="mb-4 text-muted-foreground">Team management has moved to the Profile page.</p>
                        <Link href="/dashboard/profile">
                            <Button variant="outline" size="sm">Go to Team Management</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
