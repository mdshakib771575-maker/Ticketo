"use client";

import { updateEvent } from "@/lib/api/events/action";
import { uploadImage } from "@/utils/UploadImage";
// import {Envelope} from "@gravity-ui/icons";
import { Button, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

export function EditEventModal({event}) {
        const { register, handleSubmit, formState: { errors } } = useForm();
    const CATEGORIES = ["Music", "Tech", "Sports", "Arts", "Business", "Food", "Other"];
    const LOCATIONS = ["New York", "San Francisco", "London", "Dhaka", "Tokyo", "Berlin", "Online"];
       
       const onSubmit = async (data) => {
          
            delete data?.image;
            const UpdateData ={
                ...data,
              
            }
            if(data.image){
                  const imageFile = data.image[0];
            const imageUrl = await uploadImage(imageFile);
                    UpdateData.banner = imageUrl
            }
     
            const result = await updateEvent(UpdateData,event._id);
            if(result.insertedId){
                toast.success("Event Update Successfully")
              
            }
        }
    

    return (
        <Modal className="w-full">
            <Button
                isIconOnly
                size="sm"
                className={"text-blue-600"}
                color="primary"
                variant="flat"
            // onPress={() => console.log("Edit:", event._id)}
            >
                <FaEdit />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                          
                        </Modal.Header>
                        <Modal.Body className="p-6 ">
                            <Surface variant="default">
                                <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                        <div className='flex flex-col gap-2'>
                                            <div> <label htmlFor="">Title</label></div>
                                            <div className='border rounded-xl'>

                                                <Input
                                                defaultValue={event.title}
                                                    id='title'
                                                    {...register("title", {
                                                        required: "Event title is required",
                                                    })}
                                                    label="Event Title"
                                                    placeholder="e.g. Rock Fest 2026"
                                                    className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />

                                                {errors.title && (
                                                    <p className="text-red-500 text-sm px-2">
                                                        {errors.title.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>


                                        <div className='flex flex-col gap-2'>
                                            <div><label htmlFor="">Image Url </label></div>
                                            <div className='rounded-xl'>
                                                <Input

                                                    {...register("image", { required: "organization Logo is Required" })}
                                                    type="file"
                                                    accept="image/*"
                                                    id="image"
                                                    placeholder="https://example.com/avatar.jpg"
                                                    className="w-full bg-slate-900/50 border border-white/15 hover:border-pink-500/50 mt-2 focus-within:!border-pink-500"
                                                />
                                                {errors.image && (
                                                    <p className="text-red-500 text-sm px-2">
                                                        {errors.image.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

                                        <div className="flex flex-col gap-2 w-full">
                                            <div><label htmlFor="">Category</label></div>
                                            <select
                                            defaultValue={event.category}
                                                id="category"
                                                // defaultValue="attendee"
                                                {...register("category", { required: "Role is Required" })}
                                                className="w-full border border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500 rounded-xl p-2"
                                            >
                                                {CATEGORIES.map((cat) => <option className='p-2 text-white hover:bg-pink-500/20 rounded-lg cursor-pointer' key={cat}>{cat}  </option>)}
                                            </select>
                                            {errors.category && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.category.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2 w-full">
                                            <div><label htmlFor="">Location</label></div>
                                            <select
                                             defaultValue={event.location}
                                                id="location"

                                                // defaultValue="attendee"
                                                {...register("location", { required: "Role is Required" })}
                                                placeholder="Slecet Location"
                                                className="w-full text-white border border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500 rounded-xl p-2"
                                            >
                                                {LOCATIONS.map((cat) => <option className='p-2 text-white hover:bg-pink-500/20 rounded-lg cursor-pointer' key={cat}>{cat}  </option>)}
                                            </select>
                                            {errors.location && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.location.message}
                                                </p>
                                            )}


                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                        <div className="flex flex-col gap-2 w-full ">
                                            <div><label htmlFor="">Date</label></div>
                                            <div className='border rounded-xl'>
                                                <Input
                                                 defaultValue={event.date}
                                                    {...register("date", {
                                                        required: "Date is required",
                                                    })}
                                                    id="event-date"
                                                    type="date"
                                                    label="Date"
                                                    className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />
                                            </div>

                                            {errors.date && (
                                                <p className="text-red-500 text-sm px-2">
                                                    {errors.date.message}
                                                </p>
                                            )}

                                        </div>
                                        <div className="flex flex-col gap-2 ">
                                            <div><label htmlFor="">Price</label></div>
                                            <div className='w-full border rounded-xl'>
                                                <Input 
                                                 defaultValue={event.price}
                                                id="event-price"
                                                    {...register("price", {
                                                        required: "Price is required",
                                                    })}
                                                    type="number"
                                                    min={0} step="any"
                                                    label="Ticket Price ($)"
                                                    placeholder="0.00"
                                                    className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />
                                            </div>
                                            {errors.price && (
                                                <p className="text-red-500 text-sm px-2">
                                                    {errors.price.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-2 ">
                                            <div><label htmlFor="">Capacity</label></div>
                                            <div className='w-full border rounded-xl'>
                                                <Input 
                                                 defaultValue={event.capacity}
                                                id="event-seats"
                                                    {...register("capacity", {
                                                        required: "Capacity is required",

                                                    })}
                                                    type="number" min={1}
                                                    label="Available Capacity"
                                                    placeholder="100"
                                                    className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500" />
                                            </div>
                                            {errors.capacity && (
                                                <p className="text-red-500 text-sm px-2">
                                                    {errors.capacity.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div><label htmlFor="">Description</label></div>
                                        <TextArea
                                         defaultValue={event.description}
                                            {...register("description", {
                                                required: "Description is required",
                                            })}
                                            id="event-desc" label="Detailed Description"
                                            placeholder="Outline the detailed schedule, speaker list, and amenities..."
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none min-h-[120px] text-white text-sm" />

                                        {errors.description && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.description.message}
                                            </p>
                                        )}
                                    </div>
                                   
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                             <Button type="submit" className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold h-11 px-6 shadow-lg shadow-pink-500/10" radius="lg">Update Event </Button>
                        </Modal.Footer>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}