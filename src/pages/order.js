import React, { useState } from "react";
import SEO from "../components/SEO";
import useForm from "../utils/useForm";

// HALFWAY THROUGH EP34!

export default function OrdersPage() {
  const { values, updateValue } = useForm({
    name: "",
    email: "",
  });
  console.log({ values, updateValue });
  return (
    <>
      <SEO title="Order a pizza!" />
      <form>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <legend>Menu</legend>
        </fieldset>
        <fieldset>
          <legend>Order</legend>
        </fieldset>
      </form>
    </>
  );
}
