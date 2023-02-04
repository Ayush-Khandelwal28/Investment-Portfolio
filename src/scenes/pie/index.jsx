import { Box } from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/PieChart";

const Pie = () => {
	return (
		<Box m="20px">
			<Header title="PIE CHART" subtitle="Simple Pie Chart (Based on Random Dummy Data)" />
			<Box height="75vh">
				<PieChart />
			</Box>
		</Box>
	);
};

export default Pie;