"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/custom-icons";
import { useAuthActions } from "@convex-dev/auth/react";

export const GoogleSignInButton = () => {
  const { signIn } = useAuthActions();

  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => signIn("google")}
      className="w-full flex-1"
    >
      <Icons.Google className="size-5" />
      <p className="sm:hidden">Google</p>
      <span className="sr-only">Google</span>
    </Button>
  );
};

export const FacebookSignInButton = () => {
  const { signIn } = useAuthActions();

  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => signIn("facebook")}
      className="w-full flex-1"
    >
      <Icons.Facebook className="size-5" />
      <p className="sm:hidden">Facebook</p>
      <span className="sr-only">Facebook</span>
    </Button>
  );
};

export const PinterestSignInButton = () => {
  const { signIn } = useAuthActions();

  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => signIn("pinterest")}
      className="w-full flex-1"
    >
      <Icons.Pinterest className="size-5" />
      <p className="sm:hidden">Pinterest</p>
      <span className="sr-only">Pinterest</span>
    </Button>
  );
};
