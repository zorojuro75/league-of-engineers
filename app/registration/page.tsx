import React, { useMemo } from "react";
import { redirect } from 'next/navigation';
import FormItems from "./components/FormItems";
import supabase from "@/config/supabase";
const Registration = () => {
  const handleSubmit = async (formData: FormData)=> {
    'use server';
    console.log(formData.get("image"));

    const file = formData.get("image")
    const {data: imgData, error: imgError} = await supabase.storage.from('images').upload("players/" + formData.get("id"), file)


    const { data, error } = await supabase
    .from('form').insert([{ name: formData.get("name"), 
                            id: formData.get("id"), 
                            department: formData.get("department"),
                            email: formData.get("email"),
                            pastTournament: formData.get("tournament"),
                            position: formData.get("position"),
                            transaction: formData.get("transaction")
                          }])
    const imageUrl = supabase.storage.from("images").getPublicUrl("players/" + formData.get("id")).data.publicUrl;
    const { data:img, error:imgE } = await supabase.from("form").update({image: imageUrl}).eq('id', formData.get("id"))
    
    // Logic to save image in the storage -- Done

    // get the link of the image in the storge and set it in the database -- Done

    // Optional: Display a success message or perform any other actions

    // For now, let's just clear the form fields -- Kinda Done
    redirect("/")
  };
  var formItem = useMemo(
    () => [
      {
        label: "Name",
        placeHolder: "Enter your name",
        inputType: "text",
        name: "name",
      },
      {
        label: "ID",
        placeHolder: "Enter your IUB ID",
        inputType: "number",
        name: "id",
      },
      {
        label: "Department",
        placeHolder: "Enter your Department",
        inputType: "text",
        name: "department",
      },
      {
        label: "Email",
        placeHolder: "Enter your contact number",
        inputType: "email",
        name: "email",
      },
      {
        label: "Past Tournaments",
        placeHolder: "Name your past tournment",
        inputType: "text",
        name: "tournament",
      },
      {
        label: "Prefferd Position",
        placeHolder: "Enter your prefferd playing position",
        inputType: "text",
        name: "position",
      },
      {
        label: "Image",
        placeHolder: '',
        inputType: "file",
        accept: "image/*",
        name: "image"
      },
      {
        label: "Transaction",
        placeHolder: "Enter transaction ID",
        inputType: "text",
        name: "transaction",
      },
    ],
    []
  );


  return (
    <div className="bg-background">
      <h1 className="text-center text-3xl py-[20px] px-2">
        Player Registration Form
      </h1>
      <form action={handleSubmit}
      className="md:mx-auto mx-4 mb-5 md:table md:text-lg text-md md:w-[40%]">
        {formItem.map((item) => (
          <FormItems key={item.label} {...item} />
        ))}

        <div className="border text-center py-[8px] mt-5 rounded-[5px] bg-cyan-500 text-black text-xl font-bold table-caption  caption-bottom md:w-[30%] w-[98%] md:mx-auto">
          <input type="submit" name="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Registration;