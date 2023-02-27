import React, { useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
  setLogout,
} from "../middleware/utils";

import FormLogin from "@/components/form/formLogin";
import Notes from "../components/notes";
import Auth from "@/components/auth";

export default function Home({ baseApiUrl, profile, token }) {
  async function onSubmitHandler(e) {
    e.preventDefault();
    const [email, password] = e.target;

    const response = await fetch(baseApiUrl + "/auth", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    let result = await response.json();
    if (result.token) {
      Cookies.set("token", result.token);
      Router.push("/");
    }
  }

  return (
    <div className="bg-indigo-800 w-full h-full">
      <main className="w-full h-full">
        {!profile ? (
          <FormLogin onSubmitHandler={onSubmitHandler} />
        ) : (
          <Auth profile={profile} baseApiUrl={baseApiUrl} token={token} />
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token) : "";
  return {
    props: {
      baseApiUrl,
      profile,
      token,
    },
  };
}