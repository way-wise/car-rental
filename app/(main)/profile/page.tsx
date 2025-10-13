import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileSection from "../_components/user-profile/ProfileSection";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <div>
      <ProfileSection />
    </div>
  );
};

export default ProfilePage;
