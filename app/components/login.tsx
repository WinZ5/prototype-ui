"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { useRouter } from "next/navigation"; 

export function LoginForm() {
  const router = useRouter()

  const onSubmit = (async() => {
    router.push('/projects')
  })

  return (
    // <div className="w-[30%] h-[30%] mt-7">
    //   <Card>
    //     <CardHeader className="space-y-1">
    //       <CardTitle className="text-2xl">Login</CardTitle>
    //       <CardDescription>
    //         Enter your email and password to login
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent className="grid gap-4">
    //       <div className="grid gap-2" >
    //         <Label htmlFor="email">Email</Label>
    //         <Input id="email" type="email" placeholder="test@example.com" />
    //       </div>
    //       <div className="grid gap-2" >
    //         <Label htmlFor="password">Password</Label>
    //         <Input id="password" type="password" />
    //       </div>
    //     </CardContent>
    //     <CardFooter>
    //       <Button className="w-full">Login</Button>
    //     </CardFooter>
    //   </Card>
    // </div>
    <div className="mx-auto flex w-96 flex-col justify-center sapce-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login.
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1 mt-3">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"  
                placeholder="text@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="grid gap-1 mt-3">
              <Label className="sr-only" htmlFor="email">
                Password
              </Label>
              <Input
                id="password"  
                type="password"
                autoCorrect="off"
              />
            </div>
            <Button className="mt-3">Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}