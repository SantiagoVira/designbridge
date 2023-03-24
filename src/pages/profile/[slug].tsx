import { useRouter } from "next/router";
import PrinterInfoSection from "~/components/page-specific/profile/printer-info-section";
import ResponseInfoSection from "~/components/page-specific/profile/response-info-section";
import Layout from "~/components/shared/layout";
import { api } from "~/utils/api";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug?.toString() ?? "";
  const userQuery = api.user.findUnique.useQuery({ slug });
  const user = userQuery.data;

  return (
    <Layout title={user?.name ?? ""} className="items-start">
      <div className="mx-2 flex flex-col items-start gap-1  px-6 pt-2 pb-4">
        <h1 className="w-full text-left">{user?.name}</h1>

        <ResponseInfoSection {...user} />
      </div>
      {user?.printerProfile && (
        <div className="mx-8 px-6 pb-2">
          <PrinterInfoSection profile={user?.printerProfile} />
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;
