"use client"
import React, { useMemo, useState } from "react";
import FormItems from "./FormItems";
import supabase from "@/config/supabase";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };
  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    const file = formData.get("image");

    if (file) {
      const { data: imgData, error: imgError } = await supabase.storage
        .from("images")
        .upload("players/" + formData.get("id"), file);
    }
    try {
      const { data, error } = await supabase.from("formPlayer").insert([
        {
          name: formData.get("name"),
          id: formData.get("id"),
          gender: formData.get("gender"),
          department: formData.get("department"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          pastTour: formData.get("tournament"),
          position: formData.get("position"),
          transaction: formData.get("transaction"),
          bloodGroup: formData.get("bloodgroup"),
          paymentVia: formData.get("payment"),
          rating: formData.get("rating"),
        },
      ]);
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.log({ Message: "Data Could not be sent" });
    }

    const imageUrl = supabase.storage
      .from("images")
      .getPublicUrl("players/" + formData.get("id")).data.publicUrl;
    const { data: img, error: imgE } = await supabase
      .from("formPlayer")
      .update({ image: imageUrl })
      .eq("id", formData.get("id"));
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
        label: "Gender",
        placeHolder: "Enter your Gender",
        inputType: "dropdown",
        itemList: ["Female"],
        name: "gender",
      },
      {
        label: "Email",
        placeHolder: "example@gmail.com",
        inputType: "email",
        name: "email",
      },
      {
        label: "Phone No",
        placeHolder: "Enter your phone number",
        inputType: "phone",
        name: "phone",
      },
      {
        label: "Image",
        placeHolder: "",
        inputType: "file",
        accept: "image/*",
        name: "image",
      },
      {
        label: "Blood Group",
        placeHolder: "Enter your Department",
        inputType: "dropdown",
        itemList: ["", "A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
        name: "bloodgroup",
      },
      {
        label: "Department",
        placeHolder: "Enter your Department",
        inputType: "text",
        name: "department",
      },
      {
        label: "Past Tournaments",
        placeHolder: "Name your past tournment",
        inputType: "text",
        name: "tournament",
      },
      {
        label: "Preferred Position",
        placeHolder: "Enter your preferred playing position",
        inputType: "dropdown",
        itemList: ["", "Forward", "Midfielder", "Defender", "Goal Keeper"],
        name: "position",
      },
      {
        label: "Rating",
        placeHolder: "Enter your preferred playing position",
        inputType: "dropdown",
        itemList: ["", "Icon", "A", "B", "C"],
        name: "rating",
        info: "If you were to rate yourself among these four categories: ICON > A > B > C. What would you choose?",
      },
    ],
    []
  );
  
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-[20px]">
        Player Registration Form
      </h1>
      <div className="flex flex-col justify-center">
        <div>
          {isSubmitted ? (
            <div className="text-center text-green-700 font-bold mb-3">
              Your registration was submitted successfully. You will be able to
              see yourself in the players tab once your transaction is verified.
            </div>
          ) : isLoading ? (
            <div className="text-center">Loading...</div> // Show loading animation here
          ) : (
            <form
              action={handleSubmit}
              className="md:mx-auto mx-4 mb-5 md:grid md:grid-cols-2 md:text-lg text-md md:w-[100%] gap-y-3 border border-white"
            >
              {formItem.map((item) => (
                (item.name === "payment" || item.name === "transaction") && selectedGender === "Female" ? null : (
                  <FormItems
                    key={item.label}
                    label={item.label}
                    placeHolder={item.placeHolder}
                    inputType={item.inputType}
                    accept={item.accept}
                    name={item.name}
                    info={item.info}
                    itemList={item.itemList || []}
                    selectedGender={selectedGender}
                    onGenderChange={handleGenderChange}
                  />
                )
              ))}

              <div
                className=" relative
          border 
          text-center 
          py-[8px] 
          mt-5 
          rounded-[5px] 
          bg-orange-300 
          hover.bg-orange-500 
          text-xl 
          font-bold 
          col-span-2
          md:w-[30%] 
          w-[98%] 
          md:mx-auto
          cursor-pointer
          "
              >
                <input type="submit" name="Submit" className="cursor-pointer" />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
