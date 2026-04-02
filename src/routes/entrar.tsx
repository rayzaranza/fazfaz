import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { signInWithGitHub } from "@/services/auth";
import { useState } from "react";
import GithubIcon from "@/assets/github.svg?react";
import Logo from "@/assets/logo.svg?react";

export const Route = createFileRoute("/entrar")({
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn() {
    setIsLoading(true);
    const { href } = await signInWithGitHub();
    if (href) {
      await navigate({ href });
    }
  }

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-9 bg-surface-pressed">
      <Logo />
      <div className="squircle flex min-w-72 flex-col place-items-center gap-5 rounded-2xl bg-canvas p-8 shadow-elevated">
        <Text variant="h3">entre</Text>
        <Button
          isLoading={isLoading}
          icon={GithubIcon}
          onClick={handleSignIn}
          aria-label="Entrar com GitHub"
        >
          {isLoading ? "entrando..." : "entrar com github"}
        </Button>
      </div>
    </div>
  );
}
