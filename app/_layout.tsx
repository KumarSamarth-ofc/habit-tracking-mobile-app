import { AuthProvider } from "@/lib/auth-context";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Slot } from "expo-router";

function RouteGaurd({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isAuth = false; // should come from your auth context or logic

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuth) {
      router.replace("/auth");
    }
  }, [mounted]);

  if (!mounted) return null; // or a splash screen
  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGaurd>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGaurd>
    </AuthProvider>
  );
}
