import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import loginImage from '@/assets/login.webp'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import FooterPolice from '@/components/footer-police/index'


export default function SignUp({
  className,
  ...props
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const _submit = () => {
    
    return;
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">{t('SignUp.title')}</h1>
                    <p className="text-muted-foreground text-balance">
                      {t('SignUp.description')}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">{t('SignUp.name')}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Drewn Fuguete"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">{t('SignUp.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">{t('SignUp.password')}</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="button" className="w-full" onClick={() => _submit()}>
                    {t('SignUp.button')}
                  </Button>

                  <div className="text-center text-sm">
                    {t('SignUp.loginText')}{" "}
                    <Link to="/sign-in" className="underline underline-offset-4">
                      {t('SignUp.loginButton')}
                    </Link>
                  </div>
                </div>
              </form>
              <div className="bg-muted relative hidden md:block">
                <img
                  src={loginImage}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
              </div>
            </CardContent>
          </Card>
          <FooterPolice />
        </div>
      </div>
    </div>
  );
}
