import UserInterFace from "@/components/UserInterface";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="m-4">
      <UserInterFace backendName="go" />
      </div>
    </div>
  );
}
