"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { addOrganizetion, updateOrganizetion } from '@/lib/api/organizetions/action';
import { myOrganizetion } from '@/lib/api/organizetions/data';

import { useSession } from '@/lib/auth-client';
import { uploadImage } from '@/utils/UploadImage';
import { Button, Card, CardHeader, Form, Input, TextArea } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const OrganizetionPage = () => {
    const { data: session } = useSession();
    const [myOrg, setMyOrg] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {

        const setOrgData = async () => {
            const org = await myOrganizetion(session?.user?.email);
            setMyOrg(org)
        }
        setOrgData()
    }, [session])

    //    console.log(myOrg)
    const onSubmit = async (data) => {

        const imageFile = data.logo[0];
        const imageUrl = await uploadImage(imageFile);

        const orgData = {
            organizationName: data.organizationName,
            logo: imageUrl,
            website: data.website,
            description: data.description,
            organizerEmail: session?.user.email

        }
        if (!myOrg) {
            const resData = await addOrganizetion(orgData)
            console.log(resData)
            if (resData.insetedId) {
                toast.success(" Org Profile Added")
            }
        } else {
            const updateRes = await updateOrganizetion(orgData, myOrg._id);
            if (updateRes.modifiedCount > 0) {
                toast.success(" Org Profile updated")
            }

        }
    }
    return (
        <div>
            <DashboardHeading
                title=" My Organization Profile"
                description="Update Organization Logo,profile,Wevsite and Description">
            </DashboardHeading>

            <div className="mt-6 space-y-6 max-w-3xl">
                <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl" radius="lg">
                    <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
                        <h3 className="text-xl font-bold text-white">Organization Details</h3>
                        <p className="text-slate-400 text-xs">Review and edit your organization credentials.</p>
                    </CardHeader>
                    <div className="p-6">
                        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                            <label htmlFor="">organizationName :</label>
                            <Input
                                defaultValue={myOrg?.organizationName}
                                {...register("organizationName", { required: "organizationName is Required" })}
                                id="organizationName" label="Organization Name" placeholder="TechEvents Corp" required className="w-full bg-slate-900/50 border border-white/15 mt-2 hover:border-pink-500/50 focus-within:!border-pink-500" />
                            {errors.organizationName && <p className="text-red-500">{errors.organizationName.message}</p>}

                            <label htmlFor="">organization Logo :</label>
                            <Input
                                defaultValue={myOrg?.logo}
                                {...register("logo", { required: "organization Logo is Required" })}
                                type="file"
                                accept="image/*"
                                id="logo"
                                placeholder="https://example.com/avatar.jpg"
                                className="w-full bg-slate-900/50 border border-white/15 hover:border-pink-500/50 mt-2 focus-within:!border-pink-500"
                            />
                            {errors.Logo && <p className="text-red-500">{errors.Logo.message}</p>}


                              <label htmlFor="">Website Url :</label>
                            <Input
                            
                                defaultValue={myOrg?.website}
                                {...register("website", { required: "organization Website is Required" })}
                                id="website" label="Organization Website" placeholder="techevents.corp" required className="w-full bg-slate-900/50 border border-white/15 hover:border-pink-500/50 mt-2 focus-within:!border-pink-500" />

                            {errors.Website && <p className="text-red-500">{errors.Website.message}</p>}
                            <label htmlFor="">Descripton :</label>
                            <TextArea
                                defaultValue={myOrg?.description}
                                {...register("description", { required: "Description is Required" })}
                                id="description" label="Description" placeholder="Hosting global developer conferences and software hacking marathons." required className="w-full bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none mt-3 min-h-[100px] text-white text-sm" />
                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                            <div className="flex gap-4">
                                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 px-6 shadow-lg" radius="lg">{myOrg?"Save Change":"Save"}</Button>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>

        </div>
    );
};


export default OrganizetionPage