"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/lib/auth-context" // Make sure to add 'resetPassword' to this context
import { Lock, Mail } from "lucide-react"
import { toast } from 'react-toastify' // Importing toast for notifications
interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  // Use a string for mode to handle more states easily
  const [mode, setMode] = useState<'login' | 'signup' | 'forgotPassword'>('login')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("") // For success messages like password reset
  const [loading, setLoading] = useState(false)
  
  // You'll need to implement `resetPassword` in your auth context
  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth()

  const handleClose = () => {
    onClose()
    // Reset state after a short delay to allow closing animation
    setTimeout(() => {
      setMode('login')
      setError("")
      setMessage("")
      setEmail("")
      setPassword("")
    }, 300)
  }
  
  const handleModeChange = (newMode: 'login' | 'signup' | 'forgotPassword') => {
    setMode(newMode)
    setError("")
    setMessage("")
    setPassword("")
  }

      const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setMessage("")
        setLoading(true)

        try {
          if (mode === 'login') {
            await signIn(email, password)
            toast.success('Successfully logged in!')
          } else {
            await signUp(email, password)
            toast.success('Account created successfully!')
          }
          handleClose()
        } catch (error: any) {
          setError(error.message || "An error occurred")
          toast.error(`Error: ${error.message}`)
        } finally {
          setLoading(false)
        }
      }

      const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
          await resetPassword(email)
          setMessage("Password reset link sent! Please check your email.")
          toast.success('Password reset email sent!')
        } catch (error: any) {
          setError(error.message || "Failed to send reset email.")
          toast.error(`Error: ${error.message}`)
        } finally {
          setLoading(false)
        }
      }

  const handleGoogleSignIn = async () => {
    setError("")
    setLoading(true)
    try {
      await signInWithGoogle()
      toast.success('Successfully signed in with Google!')
      handleClose()
    } catch (error: any) {
      setError(error.message || "An error occurred with Google Sign-In")
      toast.error(`Google Sign-In failed: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  // Animation variants for transitions
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black/90 backdrop-blur-xl border border-white/10 text-white max-w-md overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
            {mode === 'login' && "Welcome Back"}
            {mode === 'signup' && "Create Account"}
            {mode === 'forgotPassword' && "Reset Password"}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {mode === 'forgotPassword' ? (
            <motion.div
              key="forgotPassword"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {message ? (
                <div className="text-center p-4 text-green-400">{message}</div>
              ) : (
                <form onSubmit={handlePasswordReset} className="space-y-4">
                  <p className="text-sm text-center text-gray-300">
                    Enter your email to receive a password reset link.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="email-reset" className="text-sm font-medium text-gray-300">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input id="email-reset" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white focus:border-purple-500" placeholder="Enter your email" required />
                    </div>
                  </div>
                  {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">{error}</div>}
                  <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              )}
              <div className="text-center mt-4">
                <button onClick={() => handleModeChange('login')} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Back to Sign In
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="loginSignup"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white focus:border-purple-500" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300">Password</Label>
                    {mode === 'login' && (
                      <button type="button" onClick={() => handleModeChange('forgotPassword')} className="text-xs text-gray-400 hover:text-purple-400 transition-colors">
                        Forgot Password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white focus:border-purple-500" placeholder="Enter your password" required />
                  </div>
                </div>

                {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">{error}</div>}

                <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium">
                  {loading ? (mode === 'login' ? "Signing In..." : "Creating Account...") : (mode === 'login' ? "Sign In" : "Create Account")}
                </Button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/20" /></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-black/90 px-2 text-gray-400">Or continue with</span></div>
              </div>

              <Button type="button" onClick={handleGoogleSignIn} disabled={loading} variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">{/* Google SVG paths */}</svg>
                Continue with Google
              </Button>

              <div className="text-center mt-4">
                <button onClick={() => handleModeChange(mode === 'login' ? 'signup' : 'login')} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  {mode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}