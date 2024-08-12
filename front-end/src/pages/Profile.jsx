/**
 * v0 by Vercel.
 * @see https://v0.dev/t/krOebwhxiQp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Profile() {
  return (
    <div className="flex items-start gap-6 p-6 bg-background rounded-lg shadow-sm pt-48">
      <div className="flex-shrink-0">
        <div className="w-20 h-20">
          <div src="/placeholder-user.jpg" alt="@username" />
          <div>JD</div>
        </div>
      </div>
      <div className="flex-1 grid gap-4">
        <div className="grid gap-1">
          <div className="text-2xl font-semibold">John Doe</div>
          <div className="text-muted-foreground">john@example.com</div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <div className="text-sm font-medium text-muted-foreground">
              Phone
            </div>
            <div>+1 (555) 123-4567</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm font-medium text-muted-foreground">
              Role
            </div>
            <div>Tree Planter</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm font-medium text-muted-foreground">
              Locality
            </div>
            <div>San Francisco, CA</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm font-medium text-muted-foreground">
              Verification
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary" />
              <div>Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
