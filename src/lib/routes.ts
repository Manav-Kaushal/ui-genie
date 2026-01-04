export const navigation = {
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    forgotPassword: "/auth/forgot-password",
  },
  dashboard: {
    home: "/dashboard",
    billing: "/billing",
  },
};

export const bypassRoutes = [
  "/api/polar/webhook",
  "/api/inngest(.*)",
  "/api/auth(.*)",
  "/convex(.*)",
];

export const publicRoutes = ["/auth(.*)", "/"];
export const protectedRoutes = ["/dashboard(.*)"];
