import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, useForm } from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function Create(auth) {

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const onsubmit = (e) => {
    e.preventDefault();

    post(route("user.store"));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Create new User
          </h2>
        </div>
      }
    >

      <Head title="Users" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <form onSubmit={onsubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

              {/* User Name */}
              <div className="mt-4">
                <InputLabel
                  htmlFor="user_name"
                  value="User Name"
                />

                <TextInput
                  id="user_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mrt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              {/* User Email */}
              <div className="mt-4">
                <InputLabel
                  htmlFor="user_email"
                  value="User Email"
                />

                <TextInput
                  id="user_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mrt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              {/* User Password */}
              <div className="mt-4">
                <InputLabel
                  htmlFor="user_password"
                  value="User Password"
                />

                <TextInput
                  id="user_password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mrt-1 block w-full"
                  onChange={(e) => setData("password", e.target.value)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              {/* User Password Confirmation */}
              <div className="mt-4">
                <InputLabel
                  htmlFor="user_password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="user_password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mrt-1 block w-full"
                  onChange={(e) => setData("password_confirmation", e.target.value)}
                />
                <InputError message={errors.password_confirmation} className="mt - 2" />
              </div>





              <div className="mt-4 text-right">
                <Link className="inline-block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </AuthenticatedLayout >
  )
}
