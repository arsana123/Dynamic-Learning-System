export function Navbar() {
return (
<nav className="bg-white shadow p-4 flex justify-between items-center">
<h1 className="text-xl font-bold">Dynamic Learning Path</h1>
<div className="space-x-6">
<a href="/" className="hover:underline">Home</a>
<a href="/dashboard" className="hover:underline">Dashboard</a>
<a href="/courses" className="hover:underline">Courses</a>
<a href="/recommendations" className="hover:underline">Recommendations</a>
<a href="/profile" className="hover:underline">Profile</a>
</div>
</nav>
);
}