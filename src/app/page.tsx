import Image from "next/image";

const AVATAR_URL = "/avatar.jpg";

export default function Home() {
  return (
    <div className="cursor-default select-none p-6 font-mono md:p-10">
      <div className="flex flex-row items-center gap-4">
        <Image
          priority
          src={AVATAR_URL}
          className="rounded-full"
          alt="avatar"
          width={48}
          height={48}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJwogICAgICBocmVmPSdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0VFRUFCUUFGQUFVQUJRQUZVQVVBQmFBR1FBWkFCYUFIMEFod0I0QUljQWZRQzVBS29BbXdDYkFLb0F1UUVZQU1nQTF3RElBTmNBeUFFWUFha0JDUUUyQVFrQkNRRTJBUWtCcVFGM0FjY0JjZ0ZaQVhJQnh3RjNBcU1DRWdIV0FkWUNFZ0tqQXd3Q2p3SnNBbzhEREFPeEEwMERUUU94QktZRWFnU21CaE1HRXdncUVRQlFBRkFBVUFCUUFGVUFVQUJhQUdRQVpBQmFBSDBBaHdCNEFJY0FmUUM1QUtvQW13Q2JBS29BdVFFWUFNZ0Exd0RJQU5jQXlBRVlBYWtCQ1FFMkFRa0JDUUUyQVFrQnFRRjNBY2NCY2dGWkFYSUJ4d0YzQXFNQ0VnSFdBZFlDRWdLakF3d0Nqd0pzQW84RERBT3hBMDBEVFFPeEJLWUVhZ1NtQmhNR0V3Z3EvOElBRVFnQUVBQVFBd0VpQUFJUkFRTVJBZi9FQUNrQUFRRUJBQUFBQUFBQUFBQUFBQUFBQUFBQkF3RUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBSC8yZ0FNQXdFQUFoQURFQUFBQU5DeC84UUFHUkFBQXdFQkFRQUFBQUFBQUFBQUFBQUFBQUVSRWlFeC85b0FDQUVCQUFFL0FINmFyWmVqZVZUL3hBQVVFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQ0FRRS9BSC8veEFBVUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVEQVFFL0FILy8yUT09JyAvPgogICAgPC9zdmc+CiAg"
        />

        <div>
          <h1 className="mb-0.5 text-sm">Maxim Tereshko</h1>
          <p className="text-xs text-neutral-500">@xxtereshko</p>
        </div>
      </div>
    </div>
  );
}
