import { AuthError } from "@supabase/supabase-js"

export type SocialLayout = 'horizontal' | 'vertical'

export type AuthFormProps = {
	view: boolean
	error?: AuthError | undefined
}