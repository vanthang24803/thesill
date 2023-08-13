import getCurrentUser from "@/actions/getCurrentUser";
import ApiAlert from "@/components/api-alert";
import Body from "@/components/ui/body";
import Button from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

const Settings = async () => {
  const currentUser = await getCurrentUser();
  const isAdmin = currentUser?.role == "admin";
  if (!isAdmin) {
    redirect("/account");
  }
  return (
    <Body>
      <div className="md:flex hidden flex-col space-y-3">
        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">API</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            Main API Using
          </span>
        </div>

        <div className="py-4">
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}`}
            variant="admin"
          />
        </div>
        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Billboards </span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            API Calls for Billboards
          </span>
        </div>

        <div className="py-4 flex flex-col space-y-3">
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/billboards`}
            variant="public"
          />
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/billboards/{billboardId}`}
            variant="admin"
          />
          <ApiAlert
            title="POST"
            description={`${process.env.NEXT_PUBLIC_API_URL}/billboards`}
            variant="admin"
          />
          <ApiAlert
            title="PATCH"
            description={`${process.env.NEXT_PUBLIC_API_URL}/billboards/{billboardId}`}
            variant="admin"
          />
          <ApiAlert
            title="DELETE"
            description={`${process.env.NEXT_PUBLIC_API_URL}/billboards/{billboardId}`}
            variant="admin"
          />
        </div>

        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Categories</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            API Calls for Categories
          </span>
        </div>

        <div className="py-4 flex flex-col space-y-3">
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/categories`}
            variant="public"
          />
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/categories/{categoriesId}`}
            variant="admin"
          />
          <ApiAlert
            title="POST"
            description={`${process.env.NEXT_PUBLIC_API_URL}/categories`}
            variant="admin"
          />
          <ApiAlert
            title="PATCH"
            description={`${process.env.NEXT_PUBLIC_API_URL}/categories/{categoriesId}`}
            variant="admin"
          />
          <ApiAlert
            title="DELETE"
            description={`${process.env.NEXT_PUBLIC_API_URL}/categories/{categoriesId}`}
            variant="admin"
          />
        </div>

        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Products</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            API Calls for Products
          </span>
        </div>

        <div className="py-4 flex flex-col space-y-3">
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/products`}
            variant="public"
          />
          <ApiAlert
            title="GET"
            description={`${process.env.NEXT_PUBLIC_API_URL}/products/{productsId}`}
            variant="admin"
          />
          <ApiAlert
            title="POST"
            description={`${process.env.NEXT_PUBLIC_API_URL}/products`}
            variant="admin"
          />
          <ApiAlert
            title="PATCH"
            description={`${process.env.NEXT_PUBLIC_API_URL}/products/{productsId}`}
            variant="admin"
          />
          <ApiAlert
            title="DELETE"
            description={`${process.env.NEXT_PUBLIC_API_URL}/products/{productsId}`}
            variant="admin"
          />
        </div>

        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Map</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            Map API Using
          </span>
        </div>

        <div className="py-4">
          <ApiAlert
            title="GET"
            description={`${process.env.MAPBOX_KEY}`}
            variant="admin"
          />
        </div>

        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Database</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            Url Database Using
          </span>
        </div>

        <div className="py-4">
          <ApiAlert
            title="KEY"
            description={`${process.env.DATABASE_URL}`}
            variant="admin"
          />
        </div>

        <div className="flex flex-col  py-3 w-full border-b">
          <span className="text-3xl font-bold font-sans">Images</span>
          <span className="font-sans text-neutral-600 text-sm pt-1">
            Key Cloud Using
          </span>
        </div>

        <div className="py-4">
          <ApiAlert
            title="KEY"
            description={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
            variant="admin"
          />
        </div>
      </div>

      <div className="flex items-center flex-col space-y-6 justify-center md:hidden">
        <img
          src="/images/user/cat.svg"
          className="w-1/2 object-cover"
          alt="logo"
        />
        <span>This website doesn't support mobile !</span>
        <Link href="/">
          <Button className="rounded-lg h-12">Home Page</Button>
        </Link>
      </div>
    </Body>
  );
};

export default Settings;
