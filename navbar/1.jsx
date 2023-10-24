<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2">
    <div className="flex h-16 items-center justify-between">
      <div className="ml-6">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</nav>;

// define it above the return statement
// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'About', href: '#', current: false },
//     { name: 'Contact', href: '#', current: false },
//     { name: 'Login', href: '#', current: false },
//   ];
