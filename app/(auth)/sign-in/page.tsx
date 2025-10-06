'use client';
import FooterLink from '@/components/forms/footer_link';
import InputField from '@/components/forms/input_field';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <h1 className="form-title">Log in to your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="email@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is Required.',
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address.',
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your Password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is Required.', minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-5 yellow-btn"
        >
          {isSubmitting ? 'Sigining In' : 'Sign In'}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Register Now"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
