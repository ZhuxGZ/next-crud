import { Button } from '../components';

const AdminLogin = () => {
	return (
		<main className="grid justify-center items-center">
			<section className="grid bg-white rounded-xl p-4">
				<h1 className="font-bold text-2xl text-black mb-2">Admin Login</h1>
				<form action="" method="post" className="grid gap-2">
					<input
						type="text"
						placeholder="username"
						className="border-black border-2 rounded-md pl-1"
					/>
					<input
						type="password"
						placeholder="password"
						className="border-black border-2 rounded-md pl-1"
					/>
					<Button sx="border-black border-2 rounded-md pl-1 hover:bg-black hover:text-white transition-colors">
						Log In
					</Button>
				</form>
			</section>
		</main>
	);
};

export default AdminLogin;
