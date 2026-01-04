"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { navigation } from "@/lib/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Spinner } from "../ui/spinner";
import {
  FacebookSignInButton,
  GoogleSignInButton,
  PinterestSignInButton,
} from "./oauth-buttons";

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { signInForm, handleSignIn, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = signInForm;

  const onSubmit = handleSubmit((data) => handleSignIn(data));

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to sign in to your account
          </p>
        </div>

        {/* Email Field */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
            className={cn("", errors?.email && "border-destructive")}
            required
          />
          {errors?.email && (
            <FieldDescription className="text-destructive">
              {errors?.email?.message as string}
            </FieldDescription>
          )}
        </Field>

        {/* Password Field */}
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              href={navigation.auth.forgotPassword}
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            // placeholder="******"
            {...register("password")}
            className={cn("", errors?.password && "border-destructive")}
            required
          />
          {errors?.root && (
            <FieldDescription className="text-destructive">
              {errors?.root?.message as string}
            </FieldDescription>
          )}
        </Field>

        {/* Sign In Submit Button */}
        <Field>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </Field>

        {/* Or Continue With */}
        <FieldSeparator>Or continue with</FieldSeparator>

        <Field>
          {/* Social Buttons */}
          <div className="flex flex-wrap  gap-2">
            <GoogleSignInButton />
            <FacebookSignInButton />
            <PinterestSignInButton />
          </div>

          {/* Sign Up Link */}
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href={navigation.auth.signUp}
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
