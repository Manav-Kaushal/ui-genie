import {
  bypassRoutes,
  navigation,
  protectedRoutes,
  publicRoutes,
} from "@/lib/routes";
import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const bypassMatcher = createRouteMatcher(bypassRoutes);
const publicMatcher = createRouteMatcher(publicRoutes);
const protectedMatcher = createRouteMatcher(protectedRoutes);

export default convexAuthNextjsMiddleware(
  async (request, { convexAuth }) => {
    if (bypassMatcher(request)) return;

    const authed = await convexAuth.isAuthenticated();

    if (publicMatcher(request) && authed) {
      return nextjsMiddlewareRedirect(request, navigation.dashboard.home);
    }

    if (protectedMatcher(request) && !authed) {
      return nextjsMiddlewareRedirect(request, navigation.auth.signIn);
    }

    return;
  },
  {
    cookieConfig: {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
  }
);

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
