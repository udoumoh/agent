import { FC } from "react";
import { Flex, Text, HStack, VStack, Avatar, Box } from "@chakra-ui/react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaEquals } from "react-icons/fa";

interface leaderBoardItemProps {
  leaderboardData: {
    position: number;
    profileUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    positionChange: string;
  };
}

const LeaderBoardItem: FC<leaderBoardItemProps> = ({ leaderboardData }) => {
  return (
    <Box my={'1rem'}>
    <Flex justifyContent={"space-between"} alignItems={"center"}>
    <Flex gap={3}>
      <Text fontSize={"2xl"} fontWeight={"700"} color={"#fff"}>
        {leaderboardData.position}
      </Text>
      <Box display={"flex"} gap={3}>
        <Avatar borderRadius={5} size={"sm"} src={leaderboardData.profileUrl} />
        <Box>
          <Text fontSize="sm" color={"#fff"}>
            {leaderboardData.firstName + " " + leaderboardData.lastName}
          </Text>
          <Text fontSize="xs" color="#A7A7A7">
            {leaderboardData.email}
          </Text>
        </Box>
      </Box>
        </Flex>
      <Box display={{ md: "flex" }}>
        {leaderboardData.positionChange == "up" ? (
          <BiSolidUpArrow color="green" size="20" />
        ) : leaderboardData.positionChange == "down" ? (
          <BiSolidDownArrow color="red" size="20" />
        ) : leaderboardData.positionChange == "same" ? (
          <FaEquals color="#9D9D9D" size="20" />
        ) : (
          <></>
        )}
      </Box>
    </Flex>
    </Box>
  );
};

export default LeaderBoardItem;