"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, Dispatch, SetStateAction, useState } from "react";

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}

const ProductForm = () => {
  const [payLoad, setPayLoad] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .post("api/add_product", payLoad)
      .then((res) => {
        makeToast("Product added SUccessfully!");
        setPayLoad({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((err) => console.log("add-err", err))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Image
        className="max-h-[300px] w-auto object-contain rounded-md "
        src={payLoad.imgSrc ? payLoad.imgSrc : "/placeholder.jpg"}
        width={800}
        height={500}
        alt="product_image"
      />

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setPayLoad({
            ...payLoad,
            imgSrc: res[0]?.url,
            fileKey: res[0]?.key,
          });
    
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <div>
        <label className="block ml-1 "> Product Name</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-[#c77848] rounded-md "
          type="text"
          value={payLoad.name}
          onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block ml-1 "> Product Category</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-[#c77848] rounded-md "
          type="text"
          value={payLoad.category}
          onChange={(e) => setPayLoad({ ...payLoad, category: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block ml-1 "> Product Price</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-[#c77848] rounded-md "
          type="text"
          value={payLoad.price}
          onChange={(e) => setPayLoad({ ...payLoad, price: e.target.value })}
          required
        />
      </div>
      <div className="flex w-full mt-2">
        <button className="bg-[#c77848] block text-white px-8 py-2 rounded-lg self-center w-full ">
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
