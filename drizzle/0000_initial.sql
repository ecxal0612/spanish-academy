CREATE TYPE "public"."charla_academy_user_role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "charla_academy_accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "charla_academy_posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"body" text,
	"author_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "charla_academy_sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "charla_academy_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text,
	"email_verified" timestamp,
	"image" text,
	"password_hash" text,
	"role" "charla_academy_user_role" DEFAULT 'user' NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "charla_academy_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "charla_academy_verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "charla_academy_verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "charla_academy_accounts" ADD CONSTRAINT "charla_academy_accounts_user_id_charla_academy_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."charla_academy_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charla_academy_posts" ADD CONSTRAINT "charla_academy_posts_author_id_charla_academy_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."charla_academy_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charla_academy_sessions" ADD CONSTRAINT "charla_academy_sessions_user_id_charla_academy_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."charla_academy_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "charla_academy_accounts_provider_account_unique" ON "charla_academy_accounts" USING btree ("provider","provider_account_id");
