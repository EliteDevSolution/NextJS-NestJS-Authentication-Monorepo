"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormState, LoginFormSchema, SignupFormSchema } from "./type";
import { createSession } from "./session";

// export const signup = validatedAction(
//   SignupFormSchema,
//   async (data, formData) => {}
// );

export const signup = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const formDataObject = Object.fromEntries(formData.entries());
  const validationFields = SignupFormSchema.safeParse(formDataObject);

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    redirect("/auth/signin");
  } else {
    return {
      message:
        response.status === 409
          ? "The user is already existed!"
          : response.statusText,
    };
  }
};

export const signIn = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const formDataObject = Object.fromEntries(formData.entries());
  const validationFields = LoginFormSchema.safeParse(formDataObject);

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    const result = await response.json();
    await createSession({
      user: {
        id: result.userId,
        name: result.name,
      },
    });
    console.log({ result });

    redirect("/");
  } else {
    return {
      message:
        response.status === 401 ? "Invalid credentials!" : response.statusText,
    };
  }
};
