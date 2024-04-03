

import *as yup from 'yup'
export const CreateNewsSchema = yup.object({
    newsImage: yup.mixed().required("Image is required"),
    newsTitle: yup.string().min(10,'Title must be at least 10 characters').max(40,"Title must be at most 40 characters").required("title is required"),
    newsDescription: yup.string().min(20,"Description must be at least 20 characters").max(150,'Description must be at most 150 characters').required("Description is required"),
});