import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request,
  { params }
) {
  try {
    await connectDB();

    const { id } = params;

    const product =
      await Product.findById(id);

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request,
  { params }
) {
  try {
    await connectDB();

    const { id } = params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request,
  { params }
) {
  try {
    await connectDB();

    const { id } = params;

    const body =
      await request.json();

    const product =
      await Product.findByIdAndUpdate(
        id,
        body,
        { new: true }
      );

    return NextResponse.json(product);

  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}