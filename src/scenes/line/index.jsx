import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";

const Line = () => {
	return (
		<Box m="20px">
			<Header title="LINE CHART" subtitle="Simple Line Chart (Based on Random Dummy Data)" />
			<Box height="75vh">
				<LineChart />
			</Box>
		</Box>
	);
};

export default Line;