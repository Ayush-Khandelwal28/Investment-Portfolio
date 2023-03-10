import {
	Box,
	Button,
	Icon,
	IconButton,
	Typography,
	useTheme,
} from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { fontSize } from "@mui/system";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[900],
							color: colors.grey[300],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px, 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}

			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="17px"
			>
				{/* ROW 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="₹17,727"
						subtitle="Profit Gains"
						progress="0.75"
						increase="+14%"
						icon={
							<ShowChartIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="₹1,11,225"
						subtitle="Total Invested Value"
						progress="0.5"
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="2,441"
						subtitle="Recently Joined"
						progress="0.3"
						increase="+26%"
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="5,134"
						subtitle="Currently Active Users"
						progress="0.8"
						increase="29%"
						icon={
							<PeopleOutlinedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="Span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h5"
								fontWeight="bold"
								color={colors.grey[100]}
							>
								Current Value
							</Typography>
							<Typography
								variant="h3"
								fontWeight="500"
								color={colors.greenAccent[500]}
							>
								₹1,28,952
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height="250px" mt="-20px">
						<LineChart isDashboard={true} />
					</Box>
				</Box>

				{/* TRANSACTIONS */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					overflow="auto"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={`4px solid ${colors.primary[500]}`}
						colors={colors.grey[100]}
						p="15px"
					>
						<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
							Trending Stocks
						</Typography>
					</Box>
					{mockTransactions.map((transaction, i) => (
						<Box
							key={`${transaction.txId} - ${i}`}
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							p="15px"
						>
							<Box>
								<Typography
									color={colors.greenAccent[500]}
									variant="h5"
									fontWeight="600"
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box
								backgroundColor={colors.greenAccent[500]}
								p="5px 10px"
								borderRadius="4px"
							>
								₹{transaction.cost}
							</Box>
						</Box>
					))}
				</Box>

				{/* ROW 3 */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600">
						Campaign
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="25px"
					>
						<ProgressCircle size="125" />
						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}
						>
							₹48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc expenditures and cost</Typography>
					</Box>
				</Box>

				{/*  */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600" sx={{ p: "0px 30px" }}>
						Sales Quantity
					</Typography>
					<Box height="250px" mt="-20px">
						<BarChart isDashboard={true} />
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
						Your Investment Breakdown
					</Typography>
					<Box height="200px">
						<PieChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;