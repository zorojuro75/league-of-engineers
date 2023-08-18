'use server'
import supabase from "@/config/supabase";
export async function handleSubmit (formData) {
    
    console.log(formData.get("name"));

    // You can add additional logic here to process the form data

    // Clear the form or perform any necessary actions

    // Optional: Display a success message or perform any other actions

    // For now, let's just clear the form fields
  }