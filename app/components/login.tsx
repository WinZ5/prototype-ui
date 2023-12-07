"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation"; 

export function LoginForm() {
  const router = useRouter()

  const onSubmit = (async() => {
    router.push('/projects')
  })

  return (
    <div className="mx-auto flex w-96 flex-col justify-center sapce-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login
        </h1>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1 mt-6">
              <Label className="text-sm font-medium" htmlFor="email">
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
              <Label className="text-sm font-medium" htmlFor="password">
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