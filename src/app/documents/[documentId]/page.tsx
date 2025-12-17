import React from "react";
import { Editor } from "./editor";
import Toolbar from "./toolbar";
import { Navbar } from "./navbar";

interface PageProps {
  params: Promise<{ documentId: string }>;
}

const page = async ({ params }: PageProps) => {
  //   const awaitedParams = await params;
  //   const documentId = awaitedParams.documentId;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default page;
