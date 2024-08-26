import { Redirect } from "expo-router";

const index = () => {
	return <Redirect href='/(auth)/onboard' />;
}

export default index;
