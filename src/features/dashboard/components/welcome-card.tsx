import { Sparkles } from "lucide-react";

export function WelcomeCard() {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-gradient-to-br
        from-indigo-500/20
        via-slate-900
        to-cyan-500/10

        p-8

        backdrop-blur-2xl
      "
    >
      <div className="relative z-10">
        <div
          className="
            mb-4
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-white/10

            px-4

            py-2

            text-sm
          "
        >
          <Sparkles className="h-4 w-4" />

          Welcome Back
        </div>

        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
          "
        >
          WaslaTech HQ
        </h1>

        <p
          className="
            mt-3
            max-w-2xl

            text-muted-foreground
          "
        >
          Monitor products, infrastructure, users,
          analytics and AI services from one unified
          enterprise workspace.
        </p>
      </div>

      <div
        className="
          absolute

          -right-24

          -top-24

          h-72

          w-72

          rounded-full

          bg-cyan-500/20

          blur-[120px]
        "
      />
    </div>
  );
}