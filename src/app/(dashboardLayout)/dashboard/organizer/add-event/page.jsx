"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { addEvent } from '@/lib/api/events/action';
import { useSession } from '@/lib/auth-client';
import { uploadImage } from '@/utils/UploadImage';
import { Card, CardHeader, Input, ListBox, SelectPopover, SelectTrigger, SelectValue, Select, SelectIndicator, ListBoxItem, TextArea, Button, Form } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const AddEventPage = () => {
       const { data: session } = useSession();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CATEGORIES = ["Music", "Tech", "Sports", "Arts", "Business", "Food", "Other"];
    const LOCATIONS = ["New York", "San Francisco", "London", "Dhaka", "Tokyo", "Berlin", "Online"];
    const onSubmit = async (data) => {
        const imageFile = data.image[0];
        const imageUrl = await uploadImage(imageFile);

        delete data?.image;
        const AddData ={
            ...data,
            image:imageUrl,
            organizerEmail: session?.user?.email,
            status:"pending"
        };
 
        const result = await addEvent(AddData);
        // console.log(result)
        if(result.insertedId){
            toast.success("Event Added Successfully")
            redirect("/dashboard/organizer/manage-events")
        }else{
           toast.error( result.message||"Event Not Created...")
        }
    }

    return (
        <div>
            <DashboardHeading
                title="Add Event"
                description="Add New Event">
            </DashboardHeading>

            <div className="mt-6 max-w-3xl ">
                <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl" radius="lg">
                    <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
                        <h3 className="text-xl font-bold text-white">Host a New Event</h3>
                        <p className="text-slate-400 text-xs">Fill out the detailed event information. Banners and dates are required.</p>
                    </CardHeader>
                    <div className="p-6">
                        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full rounded-2xl">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                <div className='flex flex-col gap-2'>
                                    <div> <label htmlFor="">Title</label></div>
                                    <div className='border rounded-xl'>

                                        <Input
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
                                    <div className=' rounded-xl'>
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
                                        id="category"
                                        // defaultValue="attendee"
                                        {...register("category", { required: "Role is Required" })}
                                        className="w-full bg-slate-900 border-white hover:border-pink-500/50 focus-within:!border-pink-500 rounded-xl p-2"
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
                                        id="location"

                                        // defaultValue="attendee"
                                        {...register("location", { required: "Role is Required" })}
                                        placeholder="Slecet Location"
                                        className="w-full text-white bg-slate-900 border-white hover:border-pink-500/50 focus-within:!border-pink-500 rounded-xl p-2"
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
                                        <Input id="event-price"
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
                                        <Input id="event-seats"
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
                            <Button type="submit" className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold h-11 px-6 shadow-lg shadow-pink-500/10" radius="lg">Host Event Now</Button>
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AddEventPage;