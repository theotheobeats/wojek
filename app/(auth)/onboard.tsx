import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import Swiper from "react-native-swiper";

const Onboard = () => {
	const swiperRef = useRef<Swiper>(null);
	const [index, setActiveIndex] = useState(0);
	return (
		<SafeAreaView className="flex h-full items-center justify-between bg-white">
			<TouchableOpacity
				onPress={() => {
					router.replace("/(auth)/sign-up");
				}}
				className="w-full flex justify-end items-end p-5">
				<Text className="text-black text-md font-JakartaBold">Skip</Text>
			</TouchableOpacity>
			<Swiper
				ref={swiperRef}
				loop={false}
				dot={
					<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
				}
				activeDot={
					<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
				}
				onIndexChanged={(index) => setActiveIndex(index)}>
				{onboarding.map((item) => (
					<View className="flex items-center justify-center p-5" key={item.id}>
						<Image
							source={item.image}
							className="w-ful h-[300px]"
							resizeMode="contain"
						/>
						<View className="flex flex-row items-center justify-center w-full mt-10">
							<Text className="text-black text-3xl font-bold mx-10">
								{item.title}
							</Text>
						</View>
						<Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
							{item.description}
						</Text>
					</View>
				))}
			</Swiper>
		</SafeAreaView>
	);
};

export default Onboard;
